import * as React from "react";
import { Button, Modal, Portal, Provider, Text } from "react-native-paper";
import { connect } from "react-redux";
import { List } from "react-native-paper";
import { View } from "react-native";
const AppModal = (props) => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);

  const hideModal = () => setVisible(false);

  const list = props.exerciseList;
  const renderList = () => {
    return list.map((v, i) => (
      <List.Item
        title={v.name}
        left={() => <List.Icon color="#000" icon="folder" />}
      />
    ));
  };
  return (
    <Provider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          style={{ backgroundColor: "blue", height: "50%" }}
        >
          <View style={{}}>
            <Text>Example Modal</Text>
          </View>
        </Modal>
        <Button style={{ marginTop: 30 }} onPress={showModal}>
          Show
        </Button>
        {visible ? null : (
          <List.Section>
            <List.Subheader>Some title</List.Subheader>
            {renderList()}
          </List.Section>
        )}
      </Portal>
    </Provider>
  );
};

const mapStateToProps = (state) => {
  return {
    exerciseList: state.ExerciseReducer.exerciseList,
  };
};

export default connect(mapStateToProps)(AppModal);
