import React from 'react';

import { Section, Container } from '@components/global';
import {Link} from 'gatsby'
import FaqItem from '@common/FaqItem';
import ExternalLink from '@common/ExternalLink';

const FAQS = [
  {
    title: 'Wann sollte ich einen mobilen Tierarzt nutzen?',
    content: () => (
      <>
      <>
        Prinzipiell macht es Sinn, darauf zu achten, wie stressempfindlich Ihr Tier auf einen Besuch beim Tierarzt reagiert. Besonders ältere Haustiere aber auch ängstliche Tiere wie z.B. Katzen oder Jungtiere fühlen sich nach aufregenden Transporten, im Beisein anderer Tiere im Wartezimmer einer Tierarztpraxis, durch die fremdartigen Gerüche und Eindrücke sowie durch lange Wartezeiten gestresst. In diesem Falle bietet Ihnen HUG A PET mobile Tierärzte, die Ihr Haustier stressfrei Zuhause (oder wahlweise im Büro) behandeln können. 
      </>
      <>
      Unser Angebot ist außerdem hilfreich für Menschen, die viel beschäftigt sind und nicht immer die Zeit haben zum Tierarzt zu gehen. Außerdem bietet der tierärztliche Hausbesuch vor allem älteren Menschen und Menschen, die nicht mobil sind, eine große Erleichterung. 
      </>
      </>
    ),
  },
  {
    title: 'Welche Behandlungen sind möglich?',
    content: () => (
      <>
      Unsere mobilen Tierärzte sind darin geübt, den Großteil an benötigter Versorgung Ihres Haustieres auch ganz komfortabel Zuhause oder im Büro durchzuführen. Jedoch kann es bei schwerwiegenden Fällen auch nötig sein, Ihr Tier für weiterführende Therapie-, sowie Diagnostikmaßnahmen oder gar Operationen mit in die Tierarztpraxis oder -klinik zu nehmen, um eine bestmögliche Versorgung sicher zu stellen.  Wir sind uns unserer Verantwortung bewusst und werden Sie schon vorab über die Behandlungsmöglichkeiten informieren.      
      </>
    ),
  },
  {
    title: 'How do I scale Gatsby sites?',
    content: () => (
      <>
        Gatsby.js is Internet Scale. Forget complicated deploys with databases
        and servers and their expensive, time-consuming setup costs,
        maintenance, and scaling fears. Gatsby.js builds your site as “static”
        files which can be deployed easily on dozens of services.
      </>
    ),
  },
  {
    title: 'How does do I future-proof my website?',
    content: () => (
      <>
        Do not build a website with last decade’s tech. The future of the web is
        mobile, JavaScript and APIs—the{` `}
        <ExternalLink href="https://jamstack.org/">JAMstack</ExternalLink>.
        Every website is a web app and every web app is a website. Gatsby.js is
        the universal JavaScript framework you’ve been waiting for.
      </>
    ),
  },
  {
    title: 'What exactly does Gatsby build?',
    content: () => (
      <>
        Gatsby.js is a static PWA (Progressive Web App) generator. You get code
        and data splitting out-of-the-box. Gatsby loads only the critical HTML,
        CSS, data, and JavaScript so your site loads as fast as possible. Once
        loaded, Gatsby prefetches resources for other pages so clicking around
        the site feels incredibly fast.
      </>
    ),
  },
];

const Faq = () => (
  <Section id="faq">
    <Container>
      <h1 style={{ marginBottom: 40 }}>Häufig gestellte Fragen zum mobilen Tierarzt</h1>
      <div>
        {FAQS.map(({ title, content }) => (
          <FaqItem title={title} key={title}>
            {content()}
          </FaqItem>
        ))}
      </div>
      <h4>Click here to go to the<Link to="/faqCick"> FAQ Section</Link></h4>
    </Container>
  </Section>
);

export default Faq;
