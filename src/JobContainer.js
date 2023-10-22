import React from 'react';
import { FaAngleDoubleRight } from "react-icons/fa"
import { useGlobalContext } from './context';

const JobContainer = () => {
    const {jobs, values, setValues, loading} = useGlobalContext();

    if(loading){
        return(
            <section className='section'>
                <h1>Loading .................</h1>
            </section>
        )
    }

    const {company, dates, duties, title}= jobs[values]
return (
<main>
    <section className="container">
        <article className="tab__container">

            <div className="tab__header">
                <h1>Experience</h1>
                <div className="line"></div>
            </div>

            <div className="tab__content">
                <article className="flex__1">
                    <div className="btn__container">
                            {
                                jobs.map( (x, index)=>{
                                    return( <button  key={x.id} onClick={()=>setValues(index)} className={` button  ${index === values && "active"}` }>
                                        {x.company}
                                        </button>)
                                })
                            }
                    </div>
                </article>

                <article className="flex__2">
                    <div className="tab__text">
                        <div className="tab__text-heading">
                            <h1>{title}</h1>
                            <p>{company}</p>
                        </div>

                        <div className="tab__text-content">
                            <h4>{dates}</h4>

                            <div className="tab__text-content_duty">
                                
                                {
                                duties.map( (duty, index)=>{
                                    return(
                                        <div key={index} className='tab__text-content_flex'>
                                        <FaAngleDoubleRight className='icon'/>
                                        <p>{duty}</p>
                                    </div>
                                    )
                                }) }
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </article>
    </section>
</main>
)
}

export default JobContainer
