import AppForm from '../form/AppForm';

const BlogCommentForm = () => {
    return (
        <>
            <AppForm className="contact-comments" successMessage="Thanks For Your Comment">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input name="name" className="form-control" placeholder="Name *" type="text" required autoComplete='off' />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <input name="email" className="form-control" placeholder="Email *" type="email" required autoComplete='off' />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group comments">
                            <textarea className="form-control" name='textarea' placeholder="Comment" required autoComplete='off' />
                        </div>
                        <div className="form-group full-width submit">
                            <button className="btn btn-theme effect" type="submit">Post Comment</button>
                        </div>
                    </div>
                </div>
            </AppForm>
        </>
    );
};

export default BlogCommentForm;
