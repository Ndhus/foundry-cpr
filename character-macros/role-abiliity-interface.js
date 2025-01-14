function findAndClickInterfaceButton() {
  let interfaceButton = document.querySelector(
    '[data-roll-type="roleAbility"][data-roll-subtype="mainRoleAbility"][data-roll-title="Interface"]',
  );
  interfaceButton.click();
}

const actor = game.user.character;
if (actor) {
  const sheet = actor.sheet;
  const isRendered = sheet.rendered;

  if (isRendered) {
    findAndClickInterfaceButton();
    return;
  }

  sheet.render(true);
  setTimeout(() => {
    findAndClickInterfaceButton();
    sheet.close();
  }, 100);
}
