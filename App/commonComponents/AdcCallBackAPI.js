import React, {useEffect, useState, useMemo} from 'react';
import {FlatList, Linking, Pressable, Image, StyleSheet} from 'react-native';
import AdcView from './AdcView';
import AdcText from './AdcText';
import {get, size} from 'lodash';
import moment from 'moment';
import LottieView from 'lottie-react-native';

const AdcCallBackAPI = ({topic}) => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetchQuestions();
  }, [topic]);

  const fetchQuestions = async () => {
    try {
      const response = await fetch(
        `https://api.stackexchange.com/2.3/questions?order=desc&sort=hot&tagged=${topic}&site=stackoverflow&pagesize=100`,
      );
      const data = await response.json();
      console.log(data, 'data+++++++');
      setQuestions(data.items);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const openQuestionInBrowser = question => {
    const questionUrl = `https://stackoverflow.com/questions/${get(
      question,
      'question_id',
    )}`;
    Linking.openURL(questionUrl);
  };

  const memoizedQuestions = useMemo(() => questions, [questions]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <AdcView centerAlign flex1 commonBackGrounfColor paddingTop>
      {loading ? (
        <AdcView centerAlign>
          <LottieView
            source={require('../Assets/SplashScreen.json')}
            autoPlay
            loop={true}
            style={styles.animation}
          />
        </AdcView>
      ) : (
        <FlatList
          data={memoizedQuestions}
          keyExtractor={item => item.question_id.toString()}
          renderItem={({item}) => (
            <AdcView questionCard>
              <AdcView row sPaddingBottom>
                <AdcText topTextViews>{`${get(item, 'score')}  votes`}</AdcText>
                <AdcView marginHorizontal />
                <AdcText topTextViews>{`${get(
                  item,
                  'answer_count',
                )}   answers`}</AdcText>
                <AdcView marginHorizontal />
                <AdcText topTextViews>{`${get(
                  item,
                  'view_count',
                )}   views`}</AdcText>
              </AdcView>
              <Pressable onPress={() => openQuestionInBrowser(item)}>
                <AdcView>
                  <AdcText questionText>{get(item, 'title')}</AdcText>
                </AdcView>
              </Pressable>
              <AdcView tagMainView>
                <FlatList
                  data={item.tags}
                  keyExtractor={index => index.toString()}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  renderItem={({item: tag}) => (
                    <AdcView tagView>
                      <AdcText style={{marginRight: 5}}>{tag}</AdcText>
                    </AdcView>
                  )}
                />
              </AdcView>
              <AdcView row paddingTop flexEnd>
                <Image
                  style={{width: 20, height: 20}}
                  source={{uri: get(item, 'owner.profile_image')}}
                />
                <AdcText disPlayNameText>{`   ${get(
                  item,
                  'owner.display_name',
                )}   `}</AdcText>
                <AdcText topTextBold>{`${get(
                  item,
                  'owner.reputation',
                )}  `}</AdcText>
                <AdcText topTextViews>{`asked   ${moment(
                  get(item, 'last_activity_date'),
                ).format('hh:mm')} min ago`}</AdcText>
              </AdcView>
            </AdcView>
          )}
        />
      )}
    </AdcView>
  );
};
const styles = StyleSheet.create({
  animation: {
    width: 200,
    height: 200,
  },
});
export default AdcCallBackAPI;
