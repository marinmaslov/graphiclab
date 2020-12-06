import React from "react"

import Layout from "../components/layout/base/base"
import Banner from "../components/banners/custom/banner"
import Container from "../components/layout/base/components/container/container"

const image = "privacy-image"
const headline = "We care about your privacy"
const paragraph = "We're not even using cookies."

const PrivacyPolicyPage = () => (
  <Layout isContainer={false}>
    <Banner image={image} headline={headline} paragraph={paragraph}/>
    <Container>
        <h2>Privacy Policy</h2>
        <p>GraphicLab Inc., based in Split, Croatia, ("GraphicLab", "we") is a technology company. GraphicLab provides a brand management software as a service (“Service”) to private and enterprise customers, and operates graphiclab.com.</p>
        <p>The Service is a customizable scalable solution to fit any company’s specific brand requirements which can include, but are not limited to, Style Guide, Pattern Library, Media Library, Publisher, and Workspace. Although our customers are the main actors involved in the upload and management of all content, including content containing Personal Data, this Privacy Policy describes in detail how your Personal Data is collected and used.</p>  
        <h2>GraphicLab Cares about Personal Data</h2>
        <p>Our Privacy Policy fully applies and respects the highest protection standards set by the European Union General Data Protection Regulation ("GDPR") in force since May 25, 2018 that regulates the processing of personal data of natural persons. The geographical scope of application of the GDPR is very broad. The provisions of the GDPR apply, on the one hand within the territory of the EU and, on the other hand to all Controllers and Processors which process personal data of EU citizens (even if they live outside the EU). Accordingly, the GDPR also applies to companies not established in the territory of the EU.</p>  
        <h3>GraphicLab, as a Croatian company, is therefore also affected by the provisions of the GDPR.</h3>
        <p>We might also process Personal Data outside the territory of the European Union. Frontify guarantees that Personal Data transferred outside the EU is handled by trustworthy vendors. Vendors are examined regularly and Frontify signs individual Data Processing Agreement to ensure the highest attainable standards of protection.</p>  
        <p>Thanks to the Swiss-US Privacy Shield established in 2017 that replaced the previous Safe Harbor arrangement, the processing of Personal Data between Swiss and certified US companies guarantees the same standards of protection for the processing of Personal Data in the US territory already ensured by the EU Commission Implementing Decision 2016/1250 (EU-US Privacy Shield). Thus, when transferring Personal Data to the United States, we check the validity of the vendors according to the EU-US as well as to the Swiss-US Privacy Shield. We only use US third parties’ sub-contractors that are Privacy Shield certified.</p>  
        <p>In all the other cases and if needed, we commit to apply the Standard Contractual Clauses as established by EU Commission Decision 2004/915/EC (EU controller to non-EU or EEA controller) or EU Commission Decision 2010/87/EU (EU controller to non-EU or EEA processor). When transferring Personal Data outside the European Union or the United States, we make sure the vendors signed the Standard Contractual Clauses, if no alternative adequate level of protection applies.</p>  
        <h2>What is Personal Data?</h2>
        <p>According to art. 4 para. 1 GDPR "Personal Data" means any information relating to an identified or identifiable natural person ("Data Subject"); an identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier, or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural, or social identity of that natural person.</p>  
        <p>As we also operate Personal Data of citizens who do not belong and/or do not operate in a territory of the European Union the term Personal Data, for the purposes of this Privacy Policy encompasses both the meaning of article 4 of the GDPR as well as that of Personally Identifiable Information (PII) as it is defined in the US legislation. We make an explicit difference where required.</p>  
        <h2>GraphicLab Processes Personal Data</h2>
        <p>GraphicLab lawfully “processes” Personal Data in accordance with the meaning given to this term by article 4 of the GDPR.</p>  
    </Container>
  </Layout>
)

export default PrivacyPolicyPage