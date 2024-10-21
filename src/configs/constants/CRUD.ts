export enum CRUD_MODES {
  LIST = 'list',
  CREATE = 'create',
  EDIT = 'edit'
};

export const getCRUDMode = (param: CRUD_MODES) => {
  if(!param) {
    throw new Error("Nenhum parametro foi passado para a função 'getCRUDMode'.");
  }

  let mode;
  if (param === CRUD_MODES.LIST) {
    mode = CRUD_MODES.LIST;
  }
  if (param === CRUD_MODES.EDIT) {
    mode = CRUD_MODES.EDIT;
  }
  if (param === CRUD_MODES.CREATE) {
    mode = CRUD_MODES.CREATE;
  }

  return mode;
}
