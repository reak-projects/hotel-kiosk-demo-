// ============================================
// Mock Hardware Service
// ============================================

export async function getHardwareStatus() {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return {
    internet: true,
    touch_display: true,
    id_scanner: true,
    qr_scanner: true,
    receipt_printer: true,
    nfc_reader: true,
    key_dispenser: true,
    cash_module: true,
    dual_camera: true,
    speakers: true,
  };
}

export async function triggerPrint(documentType, data) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return {
    success: true,
    data: {
      documentType,
      printed: true,
      message: `${documentType} has been printed successfully`,
    },
  };
}
