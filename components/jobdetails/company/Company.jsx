import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './company.style';
import { icons } from '../../../constants';
import { checkImageUrl } from '../../../utils';

const Company = ({ companyLogo, jobTitle, companyName, location }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          source={{
            uri: checkImageUrl(companyLogo)
              ? companyLogo
              : "https://e7.pngegg.com/pngimages/97/170/png-clipart-job-hunting-employment-agency-career-others-miscellaneous-logo.png"
          }}
          style={styles.logoImage}
        />
      </View>
    </View>
  )
}

export default Company