export function setup(ctx) {
    ctx.patch(Skill, 'addXP').before(function(amount, masteryAction) {
      return [amount * 2, masteryAction];
    });
  }