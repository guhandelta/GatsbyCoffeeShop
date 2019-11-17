import React from 'react'
import Title from '../Globals/Title'

export default function Contact() {
    return (
        <section className="contact py-5">
            <Title title="Contact Us" />
            <div className="row">
                <div className="col-10 col-sm-8 col-md-6 mx-auto">
                    <form>
                        {/* name */}
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input className="form-control" type="text" placeholder="John Doe" name="name" id="name"/>
                        </div>
                        {/* email */}
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input className="form-control" type="text" placeholder="johndoe@example.com" name="email" id="email"/>
                        </div>
                        {/* desciption */}
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea name="description" id="description" className="form-control" rows="5" placeholder="Enter your description here....."></textarea>
                        </div>
                        {/* submit */}
                        <button type="submit" className="btn btn-yellow btn-block text-capitalize mt-5">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
}
