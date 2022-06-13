mport './mcFormStyles.scss';
import MailchimpSubscribe from "react-mailchimp-subscribe";

export const MailchimpFormContainer = props => {
    return (
        <div className="mc__form-container">
            <MailchimpSubscribe />
        </div>
    );
};
