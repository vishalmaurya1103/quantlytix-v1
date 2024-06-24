import React, { useEffect, useRef, useState } from 'react';
import { ISignUpDetails } from '../../Types/AuthType';
import { userRole } from '../../Utils/Const';
import { AppDispatch, RootState } from '../../App/Store';
import { useDispatch, useSelector } from 'react-redux';
import { createUsers, fetchUsers, deleteUsers } from '../../Redux/userSlice';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import './admin.css'
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
const AddUsers: React.FC = () => {
  const [user, setUser] = useState<ISignUpDetails>({ email: '', password: '', role: userRole.client, username: '' });
  const dispatch = useDispatch<AppDispatch>();

  const users = useSelector((state: RootState) => state.user.users);
  const status = useSelector((state: RootState) => state.user.status);
  const error = useSelector((state: RootState) => state.user.error);
  const [visible, setVisible] = useState(false);
  const toast = useRef<any>(null);


  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

  const createUser = () => {
    dispatch(createUsers(user))
    setVisible(false);
  }

  const deleteUser = (rowData: any) => {
    confirmDialog({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      defaultFocus: 'reject',
      acceptClassName: 'p-button-danger',
      accept: () => {
        dispatch(deleteUsers(rowData.id))
        setVisible(false);
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
      }
    });
  }

  const footerContent = (
    <div>
      <button type="button" onClick={() => createUser()} className="btn btn-primary">Create</button>
    </div>
  );

  const actionBodyTemplate = (rowData) => {
    return <Button icon="pi pi-times" onClick={() => deleteUser(rowData)} rounded severity="danger" aria-label="Cancel" />

  };
  return (
    <>
      <Toast ref={toast} />
      <ConfirmDialog />
      <div className='text-end mb-2'>
        <button type="button" onClick={() => setVisible(true)} className="btn btn-primary">Create User</button>
      </div>

      <div className="card">
        <DataTable value={users} tableStyle={{ minWidth: '50rem' }}>
          <Column filter field="email" sortable header="Email"></Column>
          <Column filter field="username" sortable header="Name"></Column>
          <Column filter field="role" sortable header="Role"></Column>
          <Column body={actionBodyTemplate} header="Action"></Column>

        </DataTable>
      </div>
      <Dialog header={"Create new user"} footer={footerContent} visible={visible} style={{ width: '50vw' }} onHide={() => { if (!visible) return; setVisible(false); }}>
        <form action="#!">
          <div className="gy-3 gy-md-4">
            <div className="col-12 from-row">
              <label className="form-label">Email <span className="text-danger">*</span></label>
              <input value={user.email} type="email" className="form-control" onChange={(e) => setUser({ ...user, email: e.target.value })} name="email" id="email" placeholder="name@example.com" required />
            </div>
            <div className="col-12 from-row">
              <label className="form-label">Username <span className="text-danger">*</span></label>
              <input value={user.username} type="text" className="form-control" onChange={(e) => setUser({ ...user, username: e.target.value })} name="email" id="email" placeholder="username" required />
            </div>
            <div className="col-12 from-row">
              <label className="form-label">Password <span className="text-danger">*</span></label>
              <input value={user.password} type="password" onChange={(e) => setUser({ ...user, password: e.target.value })} className="form-control" name="password" id="password" required />
            </div>
            <div className="col-12 from-row">
              <label className="form-label">Role <span className="text-danger">*</span></label>
              <select value={user.role} onChange={(e) => setUser({ ...user, role: e.target.value })} className="form-control" aria-label="Default select example">
                <option selected>Admin</option>
                <option >Client</option>
                <option >Interviwer</option>
              </select>
            </div>
          </div>
        </form>
      </Dialog>
    </>

  );
}

export default AddUsers;
