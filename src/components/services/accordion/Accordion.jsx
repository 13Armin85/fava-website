"use client";
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import styles from "./Accordion.module.css";

const Accordion = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <div className={styles.first}>
      <h1 className={styles.h1}>سوالات متداول</h1>
      <div className={styles["accordion-container"]}>
        <div className="accordion" id="accordionExample">
          {/* Item 1 */}
          <div className={`accordion-item mb-2 ${styles["accordion-item"]}`}>
            <h2 className={styles["accordion-header"]} id="headingOne">
              <button
                className={`accordion-button ${styles["accordion-button"]}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                نحوه ی دریافت خدمات فاوا چگونه است؟
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className={`accordion-body ${styles["accordion-body"]}`}>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است.
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className={`accordion-item mb-3 ${styles["accordion-item"]}`}>
            <h2 className={styles["accordion-header"]} id="headingTwo">
              <button
                className={`accordion-button ${styles["accordion-button"]}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                آیا خدمات شامل مشاوره هم می‌شود؟
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className={`accordion-body ${styles["accordion-body"]}`}>
                بله، خدمات ما شامل مشاوره تخصصی در حوزه فناوری اطلاعات نیز
                می‌شود.
              </div>
            </div>
          </div>

          {/* Item 3 */}
          <div className={`accordion-item mb-3 ${styles["accordion-item"]}`}>
            <h2 className={styles["accordion-header"]} id="headingThree">
              <button
                className={`accordion-button ${styles["accordion-button"]}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                مدت زمان انجام پروژه چقدر است؟
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className={`accordion-body ${styles["accordion-body"]}`}>
                بسته به نوع پروژه، بین 1 تا 4 هفته ممکن است زمان نیاز باشد.
              </div>
            </div>
          </div>
          <div className={`accordion-item mb-3 ${styles["accordion-item"]}`}>
            <h2 className={styles["accordion-header"]} id="headingThree">
              <button
                className={`accordion-button ${styles["accordion-button"]}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                مدت زمان انجام پروژه چقدر است؟
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className={`accordion-body ${styles["accordion-body"]}`}>
                بسته به نوع پروژه، بین 1 تا 4 هفته ممکن است زمان نیاز باشد.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
