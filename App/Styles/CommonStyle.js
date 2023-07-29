import Colors from './Colors';

const styles = {
  flex1: {flex: 1},
  centerAlign: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  commonBackGrounfColor: {
    //  backgroundColor: Colors.warningSnack,
  },
  halfPercentageWidth: {
    width: '75%',
  },
  paddingVertical: {
    paddingVertical: 30,
  },
  sPaddingBottom: {
    paddingBottom: 20,
  },
  paddingTop: {
    paddingTop: 30,
  },
  row: {
    flexDirection: 'row',
  },
  flexEnd: {
    justifyContent: 'flex-end',
  },
  questionText: {
    fontSize: 14,
    lineHeight: 16,
    fontFamily: 'Roboto',
    fontWeight: '600',
    color: Colors.statusBar,
  },
  questionCard: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderBottomWidth: 0.5,
    borderColor: Colors.grayVarient2,
  },
  tagView: {
    backgroundColor: Colors.tagBackground,
    marginHorizontal: 5,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  tagMainView: {
    flex: 1,
    width: '90%',
  },
  tagText: {
    fontSize: 13,
    lineHeight: 16,
    fontFamily: 'Roboto',
    fontWeight: '600',
    color: Colors.tagText,
  },
  topTextBold: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: 'Roboto',
    fontWeight: '800',
    color: Colors.grayVarient1,
  },
  topTextViews: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: 'Roboto',
    fontWeight: '600',
    color: Colors.grayVarient1,
  },
  marginHorizontal: {
    marginHorizontal: 15,
  },
  disPlayNameText: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: 'Roboto',
    fontWeight: '600',
    color: Colors.statusBar,
  },
};

export default styles;
