type Case = 'sensitive' | 'insensitive';
class Suggestion {
  private initialSuggestionList: any[];
  constructor(list: any[]) {
    this.initialSuggestionList = list;
  }

  completeSearch = (inpStr: string, typeCase: Case = 'insensitive') => {
    let newList: any[];
    if (typeCase === 'sensitive')
      newList = this.initialSuggestionList.filter(item => item.startsWith(inpStr));
    else
      newList = this.initialSuggestionList.filter(
        item => item.toLowerCase().startsWith(inpStr.toLowerCase())
      );
    return newList;
  }
}

export default Suggestion;
