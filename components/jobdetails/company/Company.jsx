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

      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>

      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{companyName} / </Text>
        <View style={styles.locationBox}>
          <Image
            source={icons.location}
            resizeMode='contain'
            style={styles.locationImage}
          />
          <Text style={styles.locationName}>{location}</Text>
        </View>
      </View>

    </View>
  )
}

export default Company