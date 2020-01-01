import Model from '../engine/mvc/Model';
import View from '../engine/mvc/View';
import IconModel from '../models/IconModel';
import SlotAssets from '../SlotAssets';
import Bitmap from 'openfl/lib/openfl/display/Bitmap';

export default class IconView extends View {
  private iconBitmap: Bitmap | null = null;

  constructor(model: Model) {
    super(model);
    this.createIconImage();
  }

  protected onUpdated(): void {
    super.onUpdated();
    this.removeChildren();
    this.createIconImage();
  }

  protected createIconImage(): void {
    const iconBitmaps = SlotAssets.getBitmaps('icon_');
    if (this.getModel().getId() < iconBitmaps.length - 1) {
      this.iconBitmap = iconBitmaps[this.getModel().getId()];
      this.addChild(this.iconBitmap);
    } else {
      throw new Error('Icon texture not found.');
    }
  }

  public getModel(): IconModel {
    return this.model as IconModel;
  }
}