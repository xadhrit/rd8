import React from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";
import {Link, graphql} from "gatsby"
import './style.css';


const About = ({data, location}) => {

	const siteTitle = data.site.siteMetadata?.title || `Title`;
	
	return (
		<Layout location={location} title={siteTitle}>
		  <SEO title="About" />
		  <Link to="/about" />
          <div className="about_page">
		    <h4>My name is Adhrit. It's my online residence here at rd8 complex. I aspire to live on lunar city, Moon or Build rd8 complex on Mars base.</h4>
			<br />
			<br />
			<h4>I write poems and tell fortunes. </h4>
			<br />
			<p className="mail_banner"> Mail me if you want to assign me some work :  connect me on telegram or write mail on  : <p mailto="adhirt77@gmail.com">adhirt77@gmail.com</p></p>
			<div className="personal__info">
			<p> Contact :  </p>
			</div>
			
		<p>
		   1. <a href="https://github.com/xadhrit/">Github</a>
		   <br />
		   2. <a href="https://x.com/xadhrit/">Twitter</a>
		   <br />
		   3. <a href="https://instagram.com/xadhrit/">Instagram</a>
           <br />
		   4. <a href="https://t.me/plextele">Telegram</a>
       </p>
		  </div>		  
		</Layout>
	)

}

export default About;

export const pageQuery = graphql`
  query {
	  site{
		  siteMetadata {
			  title
		  }
	  }
  }
`