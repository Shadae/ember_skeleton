App.Plant = DS.Model.extend({
  name: DS.attr("string"),
  description: DS.attr("string"),
  image: DS.attr("string"),
  family: DS.attr("string")
})

App.Plant.FIXTURES = [
  {
    id: 1,
    name: "Chrysanthemum",
    image: "http://upload.wikimedia.org/wikipedia/commons/b/b3/Chrysanthemum_sp.jpg",
    description: "Chrysanthemum morifolium (also known as Florist's daisy and Hardy garden mum) is a species of perennial plant. The plant is 1–3 feet (0.30–0.91 m) high and wide",
    family: "Asteraceae"
  }, {
    id: 2,
    name: "Camellia",
    image: "http://upload.wikimedia.org/wikipedia/commons/archive/f/f4/20070921095637%21Camellia_sasanqua1JAM343.jpg",
    description: "Camellias are evergreen shrubs or small trees up to 20 m (66 ft) tall. Their leaves are alternately arranged, simple, thick, serrated, and usually glossy. Their flowers are usually large and conspicuous, one to 12 cm in diameter, with five to nine petals in naturally occurring species of camellias. The colors of the flowers vary from white through pink colors to red; truly yellow flowers are found only in South China and Vietnam.",
    family: "Theaceae"
  }
]