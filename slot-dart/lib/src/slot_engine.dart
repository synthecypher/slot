library slot.slot_engine;

import 'core/engine.dart';
import 'slot_game.dart';

class SlotEngine extends Engine {

  static void init(SlotGame game) {

    print('SlotEngine.init');

    Engine.init(game, 800, 600);

  }

  static SlotGame get game {
    return _game as SlotGame;
  }

}
