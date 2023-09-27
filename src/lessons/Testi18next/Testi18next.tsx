import {
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import i18next, {languageRecourses} from '../../services/i18next';
import {useTranslation} from 'react-i18next';
import languageList, {LanguageType} from '../../services/languageList';
type Props = {};

const Testi18next = (props: Props) => {
  const {t} = useTranslation();
  const [visible, setvisible] = React.useState(false);
  const ChangeLanguage = (lng: LanguageType)=>{
    i18next.changeLanguage(lng)
    setvisible(false)

  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
      }}>
      <Modal
        visible={visible}
        onRequestClose={() => {
          setvisible(false);
        }}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <FlatList
            data={Object.keys(languageRecourses) as LanguageType[]}
            renderItem={({item}) => (
              <TouchableOpacity onPress={()=>ChangeLanguage(item)}>
                <Text>{languageList[item].nativeName}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>
      <Text style={{fontSize: 24, fontWeight: '700', color: '#fff'}}>
        {t('welcome')}
      </Text>
      <Pressable
        style={{
          backgroundColor: '#FACAD7',
          width: '60%',
          padding: 20,
          borderRadius: 30,
          marginTop: 20,
        }}
        onPress={() => {
          setvisible(true);
        }}>
        <Text
          style={{
            color: '#000',
            fontWeight: '500',
            fontSize: 16,
            textAlign: 'center',
          }}>
          {t('change-language')}
        </Text>
      </Pressable>
    </View>
  );
};

export default Testi18next;

const styles = StyleSheet.create({});
