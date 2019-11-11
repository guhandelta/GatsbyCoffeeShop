import React from 'react'
import { Link } from 'gatsby'
import '../layout.css';
import Title from '../Globals/Title'

export default function Info() {
    return (
        <section className="py-5">
            <div className="container">
                <Title title="Our Story"></Title>
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-muted mb-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur rerum eveniet ducimus libero dolor fuga reiciendis modi necessitatibus 
                            dolores et eligendi perferendis quasi voluptatem architecto officia ipsum, impedit fugiat distinctio. Yoihgtsr ushutso gsusehto ousehtiusgbt
                            oushts uhsouht souhtsots sei srtis tosuet aeoti seo sitseourhet seuthsuhtoshpu hwouh5t aiet uiwrugt awiwyg aipw gqpi gpiwgy gowihlgwjarhl
                            iwy tgiutg aiu gotcha
                        </p>
                        <Link to='/about'>
                            <button className="btn btn-yellow text-center">
                                About Page
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
