import INextApiRouterController from '@/server/core/next-api-router-controller.intf';

export default interface IGenericController extends INextApiRouterController {
  index: () => void;
  show: () => void;
  store: () => void;
  update: () => void;
  delete: () => void;
}
