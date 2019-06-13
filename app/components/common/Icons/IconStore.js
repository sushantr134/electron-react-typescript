// @flow

import React, { PureComponent } from 'react';
import SparkIcon from './services/Spark';
import KafkaIcon from './services/Kafka';
import HadoopIcon from './services/Hadoop';
import HiveIcon from './services/Hive'

class IconStore {
  activeColor = '#000';

  getServiceIcon = (name: string, isActive: boolean = false) => {
    switch (name) {
      case 'Spark':
        return <SparkIcon isActive={isActive} />;
      case 'Kafka':
        return <KafkaIcon isActive={isActive} />;
      case 'Hadoop':
        return <HadoopIcon isActive={isActive} />;
      case 'Hive':
            return <HiveIcon isActive={isActive} />;
    }
  };
}

export default new IconStore();
