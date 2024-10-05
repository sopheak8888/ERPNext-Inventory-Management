import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Opensource",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        As an open-source ERP solution, offers several benefits. It provides
        flexibility for customization, allowing businesses to tailor the
        platform to their unique needs. With no licensing fees, it reduces costs
        significantly.
      </>
    ),
  },
  {
    title: "Backed by worldwide community",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Being backed by a worldwide community provides immense advantages.
        Open-source projects, for instance, benefit from collective expertise,
        with developers across the globe contributing to code improvements, bug
        fixes, and feature enhancements.
      </>
    ),
  },
  {
    title: "Good UX/UI",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        focuses on creating intuitive, seamless, and enjoyable experiences for
        users. It ensures that navigation is simple, with clear visual hierarchy
        and consistent design elements that guide users effortlessly through a
        platform.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
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

export default function HomepageFeatures(): JSX.Element {
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
