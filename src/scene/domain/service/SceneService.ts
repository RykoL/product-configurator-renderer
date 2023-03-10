import { SceneProductUseCase } from "../../domain/ports/inbound/ProductUseCase";
import { Scene } from "../../domain/Scene";
import { Products } from "../../../mocks/assets";
import { RendererPort } from "../ports/outbound/RendererPort";
import {AssetRegistry} from "../../../assets/repository/AssetRegistry";
import { EnvironmentPort } from "../ports/outbound/EnvironmentPort";

export class SceneService implements SceneProductUseCase {
  private scene: Scene;

  constructor(
    private renderer: RendererPort,
    private environmentPort: EnvironmentPort,
    private assetLoader: AssetRegistry
  ) {
    //this.scene = new Scene();
  }

  public async loadProductIntoScene(productId: string) {
    const product = Products.find((prod) => prod.id === productId);

    /*this.scene.addAssets(product.assets);
    const items = await this.assetLoader
      .loadAssets(this.scene.assets)
      .then((assets) => assets.map((gltf) => gltf.scene));

    this.renderer.addObjects(...items);*/
  }

  public removeProductFromScene(productId: string) {
    /*const product = Products.find((prod) => prod.id === productId);

    const objects = product.assets.map((asset) => {
      return this.assetLoader.get(asset).scene;
    });
    this.scene.removeAssets(product.assets);
    this.assetLoader.unloadAssets(product.assets);
    this.renderer.removeObjects(...objects);*/
  }

  public async loadScene(scene: Scene) {
    await this.environmentPort.loadEnvironment(scene.environment)
  }
}
