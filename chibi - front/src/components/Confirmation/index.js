import './confirmation.scss';

export default function Confirmation() {
  return (
    <div className="confirmation">
        <div class="modal fade">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    {/* Header */}
                    <div class="modal-header">
                        <h4 class="modal-title mx-auto">Order Status<br/>AWB Number-5335T5S</h4> <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div> 
                    {/* body */}
                    <div class="modal-body">
                        <div class="progress-track">
                            <ul id="progressbar">
                                <li class="step0 active " id="step1">Order placed</li>
                                <li class="step0 active text-center" id="step2">In Transit</li>
                                <li class="step0 active text-right" id="step3"><span id="three">Out for Delivery</span></li>
                                <li class="step0 text-right" id="step4">Delivered</li>
                            </ul>
                        </div>
                        <div class="row">
                            <div class="col-9">
                                <div class="details d-table">
                                    <div class="d-table-row">
                                        <div class="d-table-cell"> Livré par </div>
                                        <div class="d-table-cell"> UPS Expedited </div>
                                    </div>
                                    <div class="d-table-row">
                                        <div class="d-table-cell"> Livraison estimée le </div>
                                        <div class="d-table-cell"> 02/12/2017 </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};