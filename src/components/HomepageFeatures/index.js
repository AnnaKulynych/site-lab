import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Fact 1',
    Svg: require('C:/Users/User/site-lab/src/components/HomepageFeatures/dog-svgrepo-com.svg').default,
    description: (
      <>
        Health Benefits: Owning a dog has been linked to numerous health benefits for humans, including lower stress levels, increased physical activity, and improved cardiovascular health.
      </>
    ),
  },
  {
    title: 'Fact 2',
    Svg: require('C:/Users/User/site-lab/src/components/HomepageFeatures/dog-pawprint.svg').default,
    description: (
      <>
        Improved Mental Health: Pets offer unconditional love — which can be a great comfort to everyone — but particularly helpful for people with mental health conditions or those going through a tough time.
      </>
    ),
  },
  {
    title: 'Fact 3',
    Svg: require('C:/Users/User/site-lab/src/components/HomepageFeatures/dog.svg').default,
    description: (
      <>
        Owning a pet — especially a dog — can help individuals connect with their community, fostering social interactions and friendships.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
