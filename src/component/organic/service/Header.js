class HeaderSerivce{
  static instance;
  constructor(){
    if(this.instance) return this.instance;
    this.instance = this;
  }
  
  // skill 클릭
  onClickSkill = () => {
    alert("skill click");
  }

  // AboutMe 클릭
  onClickAboutMe = () => {
    alert("about me click");
  }

  // Projects 클릭
  onClickProjects = () => {
    alert("projects click");
  }

}

export default new HeaderSerivce();