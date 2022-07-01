import { sidebar } from "vuepress-theme-hope";

const rubyCores = {
  text: "RubyCore",
  icon: "creative",
  prefix: "/rubycores/",
  link: "/rubycores",
  collapsable: false,    
  children: [
    {
      text: "RubyAdvince",
      icon: "note",      
      link: "ruby-advince"
    }
  ]
}


const guides = {
  text: "如何使用",
  icon: "creative",
  prefix: "/guide/",
  link: "/guide/",
  children: "structure",
}

const railsCores = {
  text: "RailsCore",
  icon: "creative",
  prefix: "/railscores/",
  link: "/railscores",
  collapsable: false,    
  children: [
    {
      text: "RailsAdvince",
      icon: "note",
      collapsable: false,      
      link: "rails-advince"
    }
  ]
}

const gemsBox = {
  text: "GemBox",
  icon: "creative",
  prefix: "/gems/",
  link: "/gems",
  collapsable: true,
  children: ['rails']

}


export default sidebar([
  "/",
  rubyCores,
  railsCores,
  gemsBox
]);

