import { ContactForm } from "../components/ContactForm";


export const ContactPage = () => {
    return (
        <div>
            <h1>Contact me</h1>
            <p>If you’re interested in working with me, please don’t hesitate to share the details of your project. Whether it’s web development, software design, or creating custom tech solutions,</p>
            <section>
                <ContactForm />
            </section>

        </div>
    );
}