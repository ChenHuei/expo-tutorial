import React from 'react';
import { StyleSheet, Modal, View, ActivityIndicator } from 'react-native';

interface LoadingProps {
  open: boolean;
}

const Loading = (props: LoadingProps) => {
  const { open } = props;

  return (
    <Modal visible={open} animationType="none" transparent>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator size="small" color="#42C2FF" />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#00000040',
  },
  activityIndicatorWrapper: {
    width: 100,
    height: 100,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },
});

export default Loading;
export type { LoadingProps };
