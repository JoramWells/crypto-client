import React from 'react';

const ModalFade = () => {
  return (
    <div className="modal fade" id="searchModal" tabIndex={-1}>
      <div className="modal-dialog modal-fullscreen">
        <div className="modal-content"
          style={{background: 'rgba(9, 30, 62, .7)'}}>
          <div className="modal-header border-0">
            <button type="button" className="btn bg-white
           btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body d-flex align-items-center
        justify-content-center">
            <div className="input-group" style={{maxWidth: '600px'}}>
              <input type="text" className="form-control bg-transparent
             border-primary p-3" placeholder="Type search keyword" />
              <button className="btn btn-primary
            px-4"><i className="bi bi-search" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalFade;
