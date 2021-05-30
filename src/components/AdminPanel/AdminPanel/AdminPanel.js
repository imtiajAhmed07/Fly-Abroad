import React from 'react';
import './AdminPanel.css'
import Sidebar from '../Sidebar/Sidebar';

const AdminPanel = () => {
    return (
        
            <div>
                <div className="row adminBorder">
                    <div className="col-md-3 sidebarBackground">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-md-9">

                    </div>
                </div>
            </div>

    );
};

export default AdminPanel;