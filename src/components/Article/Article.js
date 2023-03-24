import React from 'react';
import './Article.css';

const headingStyleOne = {
    color: 'red'
}
const headingStyleTwo = {
    color: 'green'
}
const headingStyleThree = {
    color: 'white'
}

const Article = () => {
    return (
        <div>
            <div>
                <h2 style={{color: 'tomato'}}>Article Heading Section</h2>
                <article className='blog'>
                    <h2 style={headingStyleOne}>This My Article Heading One. <span style={headingStyleTwo}>This My Article Heading Two. </span> <span style={headingStyleThree}>This My Article Heading Three.</span></h2>

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, suscipit? Sequi quisquam nihil autem est enim neque illo repellat excepturi odio. Suscipit vero repellendus cumque eius quae ex neque vitae? Itaque dolorem autem, sint vero hic error illum eum aliquid quidem. Ex eius, delectus, beatae corrupti molestias in sed architecto sequi, laboriosam quas quo unde porro modi! Facilis blanditiis nisi error neque molestiae dicta quas, expedita eos! Quisquam ipsum amet aliquam quaerat, possimus quidem similique necessitatibus voluptas voluptate! Quidem velit vel ipsa! Inventore asperiores exercitationem fuga illum ea et officiis esse ullam culpa. Odio aut voluptatibus consectetur iure numquam. Minus!


                    <p style={{color: 'red'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id eos et ut provident est suscipit asperiores ex sequi impedit reprehenderit.</p>
                </article>
            </div>
        </div>
    );
};

export default Article;