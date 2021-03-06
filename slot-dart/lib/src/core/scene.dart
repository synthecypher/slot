library slot.core.scene;

import 'package:stagexl/stagexl.dart';
import 'game.dart';

class Scene extends Sprite {
  Game game;

  Scene(Game game) {
    this.game = game;
    onAddedToStage.listen(_onAddedToStage);
  }

  void _onAddedToStage(Event e) {
    addResources();
    _loadResources();
  }

  void _loadResources() {
    print("Scene._loadResources");
    game.assets.load()
      .then((_) => init());
  }

  void addResources();
  void init();
  void update();
  void dispose();

}
