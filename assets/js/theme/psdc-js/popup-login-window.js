import $ from 'jquery';
import nod from '../common/nod';
import forms from '../common/models/forms';
import { classifyForm } from '../common/form-utils';
import utils from '@bigcommerce/stencil-utils';

const popupLoginWindow = {
    // initial items to be wired up
    init() {
        
        const $loginForm = classifyForm('#popupLoginWindowForm');

        if ($loginForm.length) {
            popupLoginWindow.registerLoginValidation($loginForm);
        }
    },
    /* ==========================================================
    ## handle validating the form fields
    ========================================================== */
    registerLoginValidation($loginForm) {
        const loginModel = forms;

        this.loginValidator = nod({
            submit: '#popupLoginWindowForm input[type="submit"]',
        });

        this.loginValidator.add([
            {
                selector: '#popupLoginWindowForm input[name="login_email"]',
                validate: (cb, val) => {
                    const result = loginModel.email(val);

                    cb(result);
                },
                errorMessage: 'Please use a valid email address, such as user@example.com.',
            },
            {
                selector: '#popupLoginWindowForm input[name="login_pass"]',
                validate: (cb, val) => {
                    const result = loginModel.password(val);

                    cb(result);
                },
                errorMessage: 'You must enter a password.',
            },
        ]);

        $loginForm.submit((event) => {
            event.preventDefault();
            $('.modal--pupuploginWindow .alertBox').slideUp(); // get rid of any previous errors
            this.loginValidator.performCheck();

            if (this.loginValidator.areAll('valid')) {
                popupLoginWindow.submitLoginForm();
            }
        });
    },
    /* ==========================================================
    ## handle loggin in via ajax
    ========================================================== */
    submitLoginForm() {
        $('.modal--pupuploginWindow .loadingOverlay').show(); // show loading screen
        let formData = {
            'login_email': $('#popupLoginWindowForm #login_email').val().trim(), // wanted to keep same ID as main login fields so can be autopopulated easily
            'login_pass': $('#popupLoginWindowForm #login_pass').val().trim() // wanted to keep same ID as main login fields so can be autopopulated easily
        };
        $.post('/login.php?action=check_login', formData, (data) => {
            // if get a response
            if (data.length) {
                // chek for logged in
                utils.api.getPage('/account.php', { template: 'psdc-custom/popup-login-window-customer-id' }, (err, response) => {
                    // trim necessary b/c it was giving back whitespace as the response if we got a
                    // response back from the account page, we're logged in
                    if (response && response.trim().length) {
                        $('.modal--pupuploginWindow .loadingOverlay, #popupLoginWindowForm').hide(); // hide loading and form itself
                        $('.modal--pupuploginWindow .alertBox--success').slideDown(); // ser is now logged in
                        setTimeout(() => {
                            // $('#popupLoginWindowForm').foundation('reveal', 'close'); // close modal after 2.5 seconds
                            // or just reload the page
                            // window.location.reload();
                            const redirecturl = $('body').hasClass('qrb__trigger-was-clicked')
                                ? `${window.location.href}?qrb_open=true`
                                : window.location.href;
                            return window.location.href = redirecturl;
                        }, 2500);
                    } else {
                        $('.modal--pupuploginWindow .loadingOverlay').hide(); // hide loading
                        $('.modal--pupuploginWindow .alertBox--error').slideDown();
                    }
                });
            } else {
                $('.modal--pupuploginWindow .loadingOverlay').hide(); // hide loading
                $('.modal--pupuploginWindow .alertBox--error').slideDown();
            }
        });
    }
};

export default popupLoginWindow;
