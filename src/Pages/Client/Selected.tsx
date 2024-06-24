import { useEffect, useState } from 'react'
import { users } from '../../data/users'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tag } from 'primereact/tag';
import {  fetchSelectedProfile } from '../../Redux/profileSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../App/Store';
import { useNavigate } from 'react-router-dom';

const Selected: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const selectedProfiles = useSelector((state: RootState) => state.profile.selectedProfiles);
  const status = useSelector((state: RootState) => state.user.status);
  const error = useSelector((state: RootState) => state.user.error);
  let navigate = useNavigate();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchSelectedProfile());
    }
  }, [status, dispatch]);

  const profileBodyTemplate = (rowData) => {
    return (
      <div className="align-items-center">
        <img src={rowData.profilePic} width="40" style={{ borderRadius: "20px" }} />
      </div>
    );
  };

  const nameBodyTemplate = (rowData) => {
    return (
      <div className="align-items-center">
        <p style={{ margin: "0px" }}><span>{rowData.firstName}  {rowData.lastName}</span>
        </p>
        <p style={{ margin: "0px" }}><i>{rowData.email} </i></p>
      </div>
    );
  };

  const locationBodyTemplate = (rowData) => {
    return (
      <div className="align-items-center">
        <p style={{ margin: "0px" }}><span>Part Time</span>
        </p>
        <p style={{ margin: "0px" }}> {`in ${rowData.location}`} </p>
      </div>
    );
  };

  const phoneBodyTemplate = (rowData) => {

    return (
      <div className="flex align-items-center gap-2">
        <i className={" pi pi-phone"} ></i>
        <i  >{rowData.phone}</i>
      </div>
    )
  };


  const getSeverity = (status) => {
    switch (status) {
      case 'unqualified':
        return 'danger';

      case 'status':
        return 'success';

      case 'new':
        return 'info';

      case 'negotiation':
        return 'warning';

      case 'renewal':
        return null;
    }
  };

  const statusBodyTemplate = (rowData) => {
    return <Tag value={rowData.status} severity={getSeverity(rowData.status)} />;
  };

  const onRowSelect = (event) => {
    navigate(`/client/search/${event.data.id}`);
  };

  return (
    <>
      <>
        <div className="card">
          <DataTable onRowSelect={onRowSelect}selectionMode="single" paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} value={selectedProfiles} tableStyle={{ minWidth: '50rem' }}>
            <Column filter field="profilePic" body={profileBodyTemplate} header="Profile"></Column>
            <Column filter field="firstName" body={nameBodyTemplate} header="Name"></Column>
            <Column filter field="location" body={locationBodyTemplate} header="Location"></Column>
            <Column filter field="phone" body={phoneBodyTemplate} header="Phone"></Column>
          </DataTable>
        </div>
      </>
    </>
  )
}

export default Selected
