// MOCKERS
import { homeMock } from "@api/mocks/home.js";
import { brandMock } from "@api/mocks/brand.js";
import { paymentMock } from "@api/mocks/payment.js";
import { balanceMock } from "@api/mocks/balance.js";
import { reportsMock } from "@api/mocks/reports.js";

export const createNewMock = (instance, sections) => {
  if (sections.indexOf("home") >= 0) {
    homeMock(instance);
  }
  if (sections.indexOf("brands") >= 0) {
    brandMock(instance);
  }
  if (sections.indexOf("payments") >= 0) {
    paymentMock(instance);
  }
  if (sections.indexOf("balance") >= 0) {
    balanceMock(instance);
  }
  if (sections.indexOf("reports") >= 0) {
    reportsMock(instance);
  }
  return instance;
};
