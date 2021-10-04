/* eslint-disable max-len */
import { NavHashLink } from 'react-router-hash-link';
import { RiFilePaper2Line } from '@react-icons/all-files/ri/RiFilePaper2Line';
import { RiThumbUpFill } from '@react-icons/all-files/ri/RiThumbUpFill';
import { RiEyeFill } from '@react-icons/all-files/ri/RiEyeFill';
import { RiSettings5Fill } from '@react-icons/all-files/ri/RiSettings5Fill';
import { RiCopyrightLine } from '@react-icons/all-files/ri/RiCopyrightLine';
import { BiCookie } from '@react-icons/all-files/bi/BiCookie';

import './terms-of-use.scss';
import { createRef } from 'react';
import { useSelector } from 'react-redux';

const TermsOfUse = () => {
  const { darkMode } = useSelector((state) => state.displayOptions);

  const scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={darkMode ? 'terms-of-use terms-of-use--dark' : 'terms-of-use'}>
      <div className={darkMode ? 'terms-of-use__nav terms-of-use__nav--dark' : 'terms-of-use__nav'}>
        <NavHashLink
          scroll={(el) => scrollWithOffset(el, 320)}
          to="#terms-of-use"
          activeClassName="terms-of-use--selected"
          className="terms-of-use__links"
          href="terms-of-use"
          ref={createRef()}
        >
          <div className="terms-of-use__nav--icon">
            <RiFilePaper2Line />
          </div>
          <div className="terms-of-use__nav--title">
            Terms of Use
          </div>
        </NavHashLink>

        <NavHashLink
          scroll={(el) => scrollWithOffset(el, 270)}
          to="#acceptable-use"
          activeClassName="terms-of-use--selected"
          className="terms-of-use__links"
          ref={createRef()}
        >
          <div className="terms-of-use__nav--icon">
            <RiThumbUpFill />
          </div>
          <div className="terms-of-use__nav--title">
            Acceptable use
          </div>
        </NavHashLink>

        <NavHashLink
          scroll={(el) => scrollWithOffset(el, 270)}
          to="#privacy-policy1"
          activeClassName="terms-of-use--selected"
          className="terms-of-use__links"
          ref={createRef()}
        >
          <div className="terms-of-use__nav--icon">
            <RiEyeFill />
          </div>
          <div className="terms-of-use__nav--title">
            Privacy Policy
          </div>
        </NavHashLink>

        <NavHashLink
          scroll={(el) => scrollWithOffset(el, 270)}
          to="#api-use-policy"
          activeClassName="terms-of-use--selected"
          className="terms-of-use__links"
          ref={createRef('api-use-policy')}
        >
          <div className="terms-of-use__nav--icon">
            <RiSettings5Fill />
          </div>
          <div className="terms-of-use__nav--title">
            API Use Policy
          </div>
        </NavHashLink>

        <NavHashLink
          scroll={(el) => scrollWithOffset(el, 270)}
          to="#copyright-trademark-policy"
          activeClassName="terms-of-use--selected"
          className="terms-of-use__links"
          ref={createRef()}
        >
          <div className="terms-of-use__nav--icon">
            <RiCopyrightLine />
          </div>
          <div className="terms-of-use__nav--title">
            Copyright/Trademark Policy
          </div>
        </NavHashLink>

        <NavHashLink
          scroll={(el) => scrollWithOffset(el, 270)}
          to="#cookie-statement1"
          activeClassName="terms-of-use--selected"
          className="terms-of-use__links"
          ref={createRef()}
        >
          <div className="terms-of-use__nav--icon">
            <BiCookie />
          </div>
          <div className="terms-of-use__nav--title">
            Cookie Statement
          </div>
        </NavHashLink>
      </div>
      <div className="terms-of-use__policies">
        <section className="terms-of-use__article">
          <div className="terms-of-use__article--title" id="terms-of-use">
            1.Terms of Use
          </div>
          <div className="terms-of-use__article--content">
            You may use DEVinterest only if you can legally form a binding contract with Pinterest, and only in compliance with these Terms and all applicable laws. When you create your Pinterest account, you must provide us with accurate and complete information. You can’t use Pinterest if it would be prohibited by U.S. sanctions. Any use or access by anyone under the age of 13 is not allowed. If you’re based in the EEA, you may only use Pinterest if you are over the age at which you can provide consent to data processing under the laws of your country. Using Pinterest may include downloading software to your computer, phone, tablet, or other device. You agree that we may automatically update that software, and these Terms will apply to any updates.
          </div>
        </section>
        <section className="terms-of-use__article">
          <div className="terms-of-use__article--title" id="acceptable-use">
            2. Acceptable Use
          </div>
          <div className="terms-of-use__article--content">
            You may use DEVinterest only if you can legally form a binding contract with Pinterest, and only in compliance with these Terms and all applicable laws. When you create your Pinterest account, you must provide us with accurate and complete information. You can’t use Pinterest if it would be prohibited by U.S. sanctions. Any use or access by anyone under the age of 13 is not allowed. If you’re based in the EEA, you may only use Pinterest if you are over the age at which you can provide consent to data processing under the laws of your country. Using Pinterest may include downloading software to your computer, phone, tablet, or other device. You agree that we may automatically update that software, and these Terms will apply to any updates.
          </div>
        </section>
        <section className="terms-of-use__article">
          <div className="terms-of-use__article--title" id="privacy-policy1">
            3. Privacy Policy
          </div>
          <div className="terms-of-use__article--content">
            You may use DEVinterest only if you can legally form a binding contract with Pinterest, and only in compliance with these Terms and all applicable laws. When you create your Pinterest account, you must provide us with accurate and complete information. You can’t use Pinterest if it would be prohibited by U.S. sanctions. Any use or access by anyone under the age of 13 is not allowed. If you’re based in the EEA, you may only use Pinterest if you are over the age at which you can provide consent to data processing under the laws of your country. Using Pinterest may include downloading software to your computer, phone, tablet, or other device. You agree that we may automatically update that software, and these Terms will apply to any updates.
          </div>
        </section>
        <section className="terms-of-use__article">
          <div className="terms-of-use__article--title" id="api-use-policy">
            4. API Use Policy
          </div>
          <div className="terms-of-use__article--content">
            You may use DEVinterest only if you can legally form a binding contract with Pinterest, and only in compliance with these Terms and all applicable laws. When you create your Pinterest account, you must provide us with accurate and complete information. You can’t use Pinterest if it would be prohibited by U.S. sanctions. Any use or access by anyone under the age of 13 is not allowed. If you’re based in the EEA, you may only use Pinterest if you are over the age at which you can provide consent to data processing under the laws of your country. Using Pinterest may include downloading software to your computer, phone, tablet, or other device. You agree that we may automatically update that software, and these Terms will apply to any updates.
          </div>
        </section>
        <section className="terms-of-use__article">
          <div className="terms-of-use__article--title" id="copyright-trademark-policy">
            5. Copyright/Trademark Policy
          </div>
          <div className="terms-of-use__article--content">
            You may use DEVinterest only if you can legally form a binding contract with Pinterest, and only in compliance with these Terms and all applicable laws. When you create your Pinterest account, you must provide us with accurate and complete information. You can’t use Pinterest if it would be prohibited by U.S. sanctions. Any use or access by anyone under the age of 13 is not allowed. If you’re based in the EEA, you may only use Pinterest if you are over the age at which you can provide consent to data processing under the laws of your country. Using Pinterest may include downloading software to your computer, phone, tablet, or other device. You agree that we may automatically update that software, and these Terms will apply to any updates.
          </div>
        </section>
        <section className="terms-of-use__article">
          <div className="terms-of-use__article--title" id="cookie-statement1">
            6. Cookie Statement
          </div>
          <div className="terms-of-use__article--content">
            You may use DEVinterest only if you can legally form a binding contract with Pinterest, and only in compliance with these Terms and all applicable laws. When you create your Pinterest account, you must provide us with accurate and complete information. You can’t use Pinterest if it would be prohibited by U.S. sanctions. Any use or access by anyone under the age of 13 is not allowed. If you’re based in the EEA, you may only use Pinterest if you are over the age at which you can provide consent to data processing under the laws of your country. Using Pinterest may include downloading software to your computer, phone, tablet, or other device. You agree that we may automatically update that software, and these Terms will apply to any updates.
          </div>
        </section>
      </div>
    </div>
  );
};

export default TermsOfUse;
