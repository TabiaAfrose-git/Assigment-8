
const Contact = () => {
    return (
        <div className="min-h-full flex items-center justify-center m-auto">
            <div className="card bg-base-200 mt-20 p-20">
                <div className="card-body sm:flex-wrap">
                    <h2 className="card-title text-3xl font-bold">Contact Us</h2>
                    <p> <span className="font-semibold text-xl">Book Vibe</span><br/>
                        <span className="font-bold">Street address:</span> 1234 Bookworm Avenue, Suite 100<br/>
                        <span className="font-bold">City:</span> Readerville<br/>
                        <span className="font-bold">State/Country:</span> Fictionland<br/>
                        <span className="font-bold">ZIP Code:</span> 56789<br/>
                        <span className="font-bold">Email:</span> support@bookvibe.com<br/>
                        <span className="font-bold">Phone:</span> +1 (555) 123-4567
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contact;