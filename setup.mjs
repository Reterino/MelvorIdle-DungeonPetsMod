// pets: { name: String, icon: String, dungeon: String, found: boolean}
const pets = []

function petIconTick(props) {
  return {
    $template: '#pet-icon-tick',
    img: props.img
  }
}
function petIconCross(props) {
  return {
    $template: '#pet-icon-cross',
    img: props.img
  }
}
function generatePetList() {
  game.dungeons.forEach(dungeon => {
    let petDungeon = dungeon.pet.pet;
    let unlocked = game.petManager.isPetUnlocked(petDungeon);
    pets.push({ name: petDungeon.id, icon: petDungeon.media, dungeon: dungeon.id, found: unlocked })
  })
  console.debug(pets);
  pets.forEach(pet => {
    console.log(pet);
    console.log("tutorial-" + pet.dungeon);
    console.log(document.getElementById("tutorial-" + pet.dungeon))
    console.log(document.getElementById("tutorial-" + pet.dungeon).nextSibling.nextSibling)
    if (pet.found) {
      ui.create(petIconTick({ img: pet.icon }), document.getElementById("tutorial-" + pet.dungeon).nextSibling.nextSibling)
    } else {
      ui.create(petIconCross({ img: pet.icon }), document.getElementById("tutorial-" + pet.dungeon).nextSibling.nextSibling)
    }
  })
}


export function setup(ctx) {
  ctx.onInterfaceReady(async (ctx) => {
    setTimeout(() => generatePetList(), 1000);
  });
}