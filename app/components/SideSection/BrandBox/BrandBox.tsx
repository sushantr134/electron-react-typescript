import * as React from 'react';
import styles from './BrandBox.scss';

type Props = {
  logo: any;
  brandName: string;
};

export class BrandBox extends React.PureComponent<Props> {
  props: Props;

  render() {
    const { logo, brandName } = this.props;
    return (
      <div className={styles.brandDiv}>
        <img src={logo} alt={brandName} />
        <span>{brandName}</span>
      </div>
    );
  }
}
