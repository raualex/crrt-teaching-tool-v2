import React from "react";
import "./Textbook.css";
import { NavLink } from 'react-router-dom';

const Textbook = () => {
  return (
    <div className="Textbook">
      <nav className="Textbook-navbar">
      <NavLink className='Textbook-NavLink' exact to='/' >
        <a className="Textbook-navbar-link" href='/'>
          CRRT Education App
        </a>
      </NavLink>
      </nav>
      <div className="Textbook-container">
        <h1>CRRT Textbook: Beta Version 2.0</h1>
        <h2><p><strong>Introduction</strong></p></h2>
        <hr/>
        <p>Welcome to the beta version of the written materials section.&nbsp; The main purpose of this section is to provide on-demand information for users while caring for simulated patients.&nbsp; While there is a link to this section from the program&rsquo;s main menu, we expect most users to access the material from the &ldquo;hint&rdquo; buttons available in the virtual patient simulator.&nbsp; The <strong>&ldquo;At a Glance&rdquo; </strong>information at the beginning of each section is therefore designed to be short, to the point, and to help the user accurately care for the virtual patient.&nbsp;</p>
        <p>In the final version of this teaching tool, an <strong>&ldquo;In-depth&rdquo; </strong>section will be available to explain the content in much greater detail.&nbsp; These sections are currently under construction, but some sections have been inserted to give an idea of the content that will be available.&nbsp;</p>
        <h2><p><strong>Overview</strong></p></h2>
        <hr/>
        <p>Continuous renal replacement therapy (CRRT) is a form of dialysis used to treat severe acute kidney injury (AKI) in critically ill patients.&nbsp; By running dialysis over the course of 24 hours, as opposed to 4 hours as is typical in intermittent hemodialysis, patients have less rapid shifts in fluids and electrolytes, and therefore have less hemodynamic instability during the treatment.&nbsp; It is also easier to achieve more consistent volume control when removing fluid over 24 hours, as opposed to in short sessions.&nbsp;</p>
        <p>Indications for CRRT, similar to indications for hemodialysis, include intractable acidosis, hyperkalemia, intoxications, intractable volume overload, and uremia.&nbsp; CRRT has not been demonstrated to improve survival compared to intermittent hemodialysis, but has been shown to decrease the rates of hemodynamic instability.&nbsp; CRRT is usually chosen, then, in patients with pressor requirements, or in whom hemodynamic instability is anticipated.&nbsp;</p>
        <p>Preferred access for CRRT is a non-tunneled short-term hemodialysis catheter, such as a Mahurkar catheter.&nbsp; These can be placed in the right or left internal jugular veins, or in the femoral veins.&nbsp; RIJ placement is preferred if possible because of the straight path to the cavoatrial junction.&nbsp;</p>
        <p>The prescription for CRRT consists of the modality, the blood flow rate, the composition of the replacement or dialysate fluid used, the replacement or dialysate fluid flow rate, and the amount of ultrafiltration.&nbsp;</p>
        <h2 className="Textbook-h2" id="modality"><p><strong>Modality</strong></p></h2>
        <hr/>
        <h3><p><strong>At a Glance:</strong></p></h3>
        <p><strong>CVVHF (Continuous venovenous hemofiltration)</strong></p>
        <ul>
          <li>Clearance of solutes via convection, removal of fluid via UF</li>
          <li>Convection is a process where solutes pass across the semi-permeable membrane along with the solvent (&ldquo;solvent drag&rdquo;) in response to a positive transmembrane pressure
            <ul>
              <li>Will clear middle-molecule solutes better than diffusion-based modalities. This may be of theoretical benefit, but there is no data showing better outcomes with convective vs. diffusive clearance</li>
              <li>Requires replacement fluid</li>
            </ul>
          </li>
        </ul>
        <p><strong>CVVHD (Continuous venovenous hemodialysis)</strong></p>
        <ul>
          <li>Clearance of solutes via diffusion, removal of fluid via UF</li>
          <li>Diffusion is solute transport across a semi-permeable membrane &ndash; molecules move from areas of higher to lower concentrations</li>
          <li>Equivalent small-molecule clearance compared to convection</li>
          <li>Requires dialysate, not replacement fluid</li>
        </ul>
        <p><strong>CVVHDF (Continuous venovenous hemodiafiltration)</strong></p>
        <ul>
          <li>Clearance via diffusion and convection</li>
          <li>Superior small and middle molecule clearance compared to CVVHF and CVVHD</li>
          <li>Requires both dialysate and replacement fluid</li>
          <li>Can&rsquo;t be run on the NXStage machine, which we are using in this simulation</li>
        </ul>
        <h3><p><strong>In-depth (in progress):</strong></p></h3>
        <p>The modalities of CRRT are differentiated mainly by the type of clearance they utilize.&nbsp;</p>
        <p><strong>Continuous Veno-Venous Hemofiltration (CVVH)</strong> uses convection, whereas <strong>Continuous Veno-Venous Hemodialysis (CVVHD)</strong> uses mainly diffusion.&nbsp; <strong>Continuous Veno-Venous HemoDiafiltration (CVVHDF) </strong>is a combination of the two.&nbsp; The terminology is also slightly different, as CVVH uses replacement fluid, CVVHD uses dialysate, and CVVHDF uses both replacement fluid and dialysate.&nbsp;</p>
        <p>The biggest difference is that convection more effectively removes middle and large molecules, although in clinical practice a clear benefit to removing larger molecules has not been demonstrated.&nbsp; Other differences include decreased filtration fraction with CVVHD (see &ldquo;filtration fraction&rdquo; section), and less fluid needed to achieve the same dose as in pre-filter CVVH (see &ldquo;dose&rdquo; section below).&nbsp;</p>
        <p><strong>Diffusion&nbsp; </strong></p>
        <img src="/images/diffusion.png" href="/images/diffusion.png" alt="diffusion diagram"/>
        <p><strong>Figure 1:&nbsp; The yellow molecules, representing urea, move from the blood, which has a high concentration of urea, into the dialysate, which initially has no urea.&nbsp; Middle molecules, represented by the green ovals, do not easily move across the membrane.&nbsp; </strong></p>
        <p>In diffusive clearance, solutes move from areas of high concentration (usually the blood) to areas of low concentration (the dialysate).&nbsp; CRRT membranes typically have pore sizes up to 50,000 Daltons.&nbsp; Small molecules, such as urea, are able to easily move across the membrane, and thus equilibrate rapidly.&nbsp; Larger molecules have a harder time getting through the pores, and given the short amount of time in takes blood to pass through the filter, these molecules are not cleared as effectively.&nbsp;</p>
        <p><strong>CVVHD </strong>is the modality that predominantly uses diffusion.&nbsp; In this modality, blood runs through the filter, through thousands of semi-permeable microtubules.&nbsp; Dialysate is run into the filter at the opposite end of the filter, and bathes the outside of the microtubules and establishing a &ldquo;counter current&rdquo; flow.&nbsp; Solutes can diffuse into the dialysate, or into the blood, depending on the concentration gradients.&nbsp; Urea, which has a higher concentration in the blood, moves into the dialysate, whereas bicarbonate, which often has a higher concentration in the dialysate, can move into the blood.&nbsp; There is no direct contact between the blood and the dialysate, as they are separated at all times.&nbsp; The combination of dialysate fluid and ultrafiltration removed from the blood is called the effluent.&nbsp;</p>
        <img src="/images/crrt.png" href="/images/crrt.png" alt="crrt diagram"/>
        <p><strong>Figure is taken from Dr. Jorge Cerd&aacute;&rsquo;s lecture delivered at CRRT Academy on 8/13/16.&nbsp; In the final version, author permission will be obtained, or an original figure created.&nbsp; &nbsp;</strong></p>
        <p><strong>&nbsp;</strong></p>
        <p><strong>&nbsp;</strong></p>
        <p><strong>&nbsp;</strong></p>
        <p><strong>Convection:</strong></p>
        <img src="/images/convection.png" href="/images/convection.png" alt="convection diagram"/>
        <p><strong>Figure 1:&nbsp; Fluid is forced across the membrane into the &ldquo;effluent&rdquo; space by hydrostatic pressure applied to the blood.&nbsp; Middle molecule clearance is increased because of the hydrostatic force.&nbsp; </strong></p>
        <p>In convective clearance, a hydrostatic pressure is applied to force water across the membrane, and solutes follow due to &ldquo;solvent drag.&rdquo;&nbsp; Because there is a force &ldquo;pushing&rdquo; solutes across the membrane, larger molecules move more quickly across the membrane in convection than in diffusion.&nbsp;</p>
        <p>Rates of convection are typically in the range of 2 liters per hour.&nbsp; If 2 liters were removed from the plasma volume without being replaced, the patient would quickly become hypovolemic.&nbsp; To prevent that from happening, fluid is infused back into the patient.&nbsp; The replacement fluid can be given before the blood enters the filter (pre-filter CVVH), after the blood leaves the filter (post-filter CVVH) or a combination of the two.&nbsp;</p>
        <p>Pre-filter CVVH has a lower filtration fraction at any given flow rate than post-filter CVVH, and thus is less likely to have filter clotting (see &ldquo;filtration fraction&rdquo; below).&nbsp; However, there is a dilutional effect in pre-filter CVVH that makes it slightly less efficient than post-filter CVVH or CVVHD.&nbsp;</p>
        <img src="/images/fluids.png" href="/images/fluids.png" alt="fluids diagram"/>
        <p><strong>Figure is taken from Dr. Jorge Cerd&aacute;&rsquo;s lecture delivered at CRRT Academy on 8/13/16. &nbsp;In the final version, author permission will be obtained, or an original figure created.&nbsp;&nbsp; </strong></p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <h2 className="Textbook-h2" id="electrolytes"><p><strong>Electrolytes</strong></p></h2>
        <hr/>
        <p><strong>At a Glance:</strong></p>
        <p className="Textbook-paragraph" id="replacement-fluid"><strong>Replacement/Dialysate Fluid:&nbsp; </strong>Therapy fluid at most institutions is bought pre-made from outside companies.&nbsp; The advantage of using pre-made fluid is that compounding errors are very infrequent compared to local pharmacy rates.&nbsp; However, this comes add the cost of flexibility in terms of solute concentrations.&nbsp; The standard concentrations of PureFlow, the fluid currently used by the University of Colorado, has the following solute concentrations.</p>
        <table className="table">
          <tbody>
            <tr>
              <td width="68">
                <p>PureFlow&reg;</p>
              </td>
              <td width="53">
                <p>0K/3Ca</p>
              </td>
              <td width="53">
                <p>2K/0Ca</p>
              </td>
              <td width="63">
                <p>4K/2.5Ca</p>
              </td>
              <td width="49">
                <p>2K/0Ca (low bicarb)</p>
              </td>
            </tr>
            <tr>
              <td width="68">
                <p>Lactate (mEq/L)</p>
              </td>
              <td width="53">
                <p>0</p>
              </td>
              <td width="53">
                <p>0</p>
              </td>
              <td width="63">
                <p>0</p>
              </td>
              <td width="49">
                <p>0</p>
              </td>
            </tr>
            <tr>
              <td width="68">
                <p>Bicarbonate (mEq/L)</p>
              </td>
              <td width="53">
                <p>35</p>
              </td>
              <td width="53">
                <p>35</p>
              </td>
              <td width="63">
                <p>35</p>
              </td>
              <td width="49">
                <p>25</p>
              </td>
            </tr>
            <tr>
              <td width="68">
                <p>Potassium (mEq/L)</p>
              </td>
              <td width="53">
                <p>0</p>
              </td>
              <td width="53">
                <p>2</p>
              </td>
              <td width="63">
                <p>4</p>
              </td>
              <td width="49">
                <p>2</p>
              </td>
            </tr>
            <tr>
              <td width="68">
                <p>Sodium (mEq/L)</p>
              </td>
              <td width="53">
                <p>140</p>
              </td>
              <td width="53">
                <p>140</p>
              </td>
              <td width="63">
                <p>140</p>
              </td>
              <td width="49">
                <p>130</p>
              </td>
            </tr>
            <tr>
              <td width="68">
                <p>Calcium (mEq/L)</p>
              </td>
              <td width="53">
                <p>3</p>
              </td>
              <td width="53">
                <p>0</p>
              </td>
              <td width="63">
                <p>2.5</p>
              </td>
              <td width="49">
                <p>0</p>
              </td>
            </tr>
            <tr>
              <td width="68">
                <p>Magnesium (mEq/L)</p>
              </td>
              <td width="53">
                <p>1</p>
              </td>
              <td width="53">
                <p>1.5</p>
              </td>
              <td width="63">
                <p>1.5</p>
              </td>
              <td width="49">
                <p>1.5</p>
              </td>
            </tr>
            <tr>
              <td width="68">
                <p>Chloride (mEq/l)</p>
              </td>
              <td width="53">
                <p>109</p>
              </td>
              <td width="53">
                <p>108.5</p>
              </td>
              <td width="63">
                <p>113</p>
              </td>
              <td width="49">
                <p>108.5</p>
              </td>
            </tr>
            <tr>
              <td width="68">
                <p>Glucose (mg/dL)</p>
              </td>
              <td width="53">
                <p>100</p>
              </td>
              <td width="53">
                <p>100</p>
              </td>
              <td width="63">
                <p>100</p>
              </td>
              <td width="49">
                <p>100</p>
              </td>
            </tr>
          </tbody>
        </table>

        <p className="Textbook-paragraph" id="sodium"><strong><u>Sodium</u>:</strong> &nbsp;The goal in patients with normal sodium levels is to avoid hyponatremia (&lt;135 mmol/L) or hypernatremia (&gt;145 mmol/L).&nbsp; Both of these have been associated with increased mortality in critically ill patients.&nbsp; Sodium solutions used in CRRT, then, should generally be 140 mmol/L (See the D5W or 3% normal saline sections regarding cases where higher or lower sodium values are desired).&nbsp;</p>
        <p className="Textbook-paragraph" id="potassium"><strong><u>Potassium</u>:&nbsp; </strong>The goal in CRRT is to normalize potassium around 3.8 - 4.6.&nbsp; Solutions can be made with concentrations from 0 -4 mmol/L, but concentrations less than 2 mmol/L should be used with caution.&nbsp; In cases of life-threatening hyperkalemia or in cases where potassium generation is high (tissue breakdown, rhabdomyolysis) the dialysis dose (see dose section below) will need to be increased, or if possible the patient should be converted to intermittent hemodialysis.&nbsp;</p>
        <p className="Textbook-paragraph" id="chloride"><strong><u>Chloride</u>:&nbsp; </strong>Normal chloride ranges from 100 -105 mmol/L.&nbsp; In pre-made solutions, the concentrations are often higher to balance the cations and maintain charge neutrality.&nbsp;</p>
        <p className="Textbook-paragraph" id="bicarbonate"><strong><u>Bicarbonate</u>:&nbsp; </strong>The goal when selecting bicarbonate values is to correct acidosis, and then to maintain the patient within a normal pH range.</p>
        <p>During critical illness complicated by severe AKI, patients often have a metabolic acidosis, and have higher than normal rates of endogenous acid production.&nbsp; Pre-made fluids often have a supranormal value of 35 mEq/L to compensate for these factors.&nbsp;</p>
        <p>When citrate is in use, lower bicarbonate fluid is used (25 mEq/L), because the citrate that enters the systemic circulation is converted to bicarbonate, which can result in metabolic alkalosis (see &ldquo;<u>citrate</u>&rdquo; section for more information).&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <p className="Textbook-paragraph" id="calcium"><strong><u>Calcium</u>:&nbsp; </strong>The goal when selecting a calcium concentration is to maintain a total calcium between 8.5 and 10 mg/dL, and an ionized calcium between 1.0 and 1.2 mmol/L.&nbsp;</p>
        <p>Calcium in solution is given in units of mEq/L, and will come with values ranging from 0-3 mEq/L.&nbsp; Dividing this number by 2 will give mmol/L, the value for ionized calcium.&nbsp; Multiplying by 4 will give roughly the value of the total calcium.&nbsp;</p>
        <p>0 calcium solutions are used with citrate (see &ldquo;<u>citrate</u>&rdquo; section for more information).</p>
        <p className="Textbook-paragraph" id="magnesium"><strong><u>Magnesium</u></strong>:&nbsp; Magnesium is generally found at a concentration of 1.5 mg/dL in pre-made solutions, although some solutions come with 1 mg/dL.&nbsp; Hypomagnesemia should be avoided, and magnesium replacement given systemically if magnesium values are low during CRRT.</p>
        <p className="Textbook-paragraph" id="phosphorous"><strong><u>Phosphorous</u>:</strong>&nbsp; Phosphorous is currently not included in most commercial CRRT fluid.&nbsp; This is because it easily precipitates in solution with calcium chloride.&nbsp; There is one commercially available fluid with a concentration of 1 mg/dL.&nbsp; Hypophosphatemia is a very common complication of CRRT, and systemic phosphate repletion must be given regularly.</p>
        <p><strong>&nbsp;</strong></p>
        <p><strong>In-depth (in progress):</strong></p>
        <p><strong>Sodium:</strong>&nbsp;</p>
        <p>The goal in patients with normal sodium levels is to avoid hyponatremia (&lt;135 mmol/L) or hypernatremia (&gt;145 mmol/L).&nbsp; Both of these have been associated with increased mortality in critically ill patients.&nbsp; Sodium solutions used in CRRT, then, should generally be 140 mmol/L.&nbsp;</p>
        <p>Pre-made solutions come with sodium concentrations of either 130 or 140 mmol/L. The 130 mmol/L solution is used primarily with regional citrate anticoagulation RCA.&nbsp; The citrate solutions are primarily composed of sodium citrate, and the sodium concentrations are 224 mmol/L in the case of ACD-A, and 420 mmol/L in 4% TSA.&nbsp; The lower sodium concentrations in the premade solutions, therefore, accounts for the supraphysiologic sodium concentrations seen in the citrate solutions.</p>
        <p>In cases where a patient starts with an abnormally low sodium, the correction rate should not exceed 6-8 mmol/L over the first 24 hours.&nbsp; Unfortunately, no premade CRRT solutions with sodium concentrations less than 130 mmol/L are commercially available.&nbsp; In such instances, D5W must be infused post-filter to achieve the desired sodium concentration (see the &ldquo;<u>D5W</u>&rdquo; section below for more information).&nbsp;</p>
        <p>Similarly, there may be instances where a sodium &gt; 140 mmol/L is needed.&nbsp; In a severely hypernatremic patient, for instance, lowering the sodium too quickly will results in cerebral edema, because the CNS compartment does not equilibrate as rapidly to a change in sodium concentration as the rest of the body.&nbsp; As a result, fluid will move into the CNS compartment.&nbsp; To avoid this, sodium should be lowered at a rate of no more that 6-8 mmol/L per day.&nbsp; Another instance where a sodium concentration &gt; 140 mmol/L might be desired is in the setting of increased cerebral pressure following subarachnoid hemorrhage or neurosurgery.&nbsp; Again, because sodium concentrations don&rsquo;t change as rapidly in the CNS compartment, water will leave the CNS and move into the systemic circulation, thus lowering cerebral pressures.&nbsp; In both these instances, higher sodium concentrations are achieved using 3% normal saline, which has a sodium concentration of 512 mmol/L (see the &ldquo;<u>hypertonic saline</u>&rdquo; section below for more information).&nbsp;&nbsp;</p>
        <p>&nbsp;</p>
        <p><strong>Potassium</strong>:&nbsp; Hyperkalemia is often a concern in patients with AKI.&nbsp; Intermittent hemodialysis should be used in cases of life-threatening hyperkalemia if possible, because the rates of potassium removal with CRRT are much slower in comparison.&nbsp; In cases where hyperkalemia is not acutely life threatening or when the patient will not tolerate HD due to hemodynamic instability, CRRT is an acceptable option.</p>
        <p>Pre-made solutions generally come with concentrations of 0 mmol/L and 4 mmol/L.&nbsp; A 2 mmol/L solution can then be made by combining these two solutions.&nbsp;</p>
        <p><strong>Chloride:&nbsp; </strong>Normal chloride ranges from 100 -105 mmol/L.&nbsp; In pre-made solutions, the concentrations are often higher to balance the cations and maintain charge neutrality.&nbsp;</p>
        <p><strong>Bicarbonate:&nbsp; </strong>In cases of severe acidosis, CRRT can be used to correct acidosis.&nbsp; In the past, CRRT solutions were made using lactate, which would be converted into bicarbonate by the liver.&nbsp; This was done because the calcium and bicarbonate would precipitate if left in solution together for an extended period of time.&nbsp; In patients with liver dysfunction who could not metabolize lactate, the acidosis could actually worsen.&nbsp; The advent of the 2-compartement bag allowed for the use of bicarbonate.&nbsp; Pre-made solutions generally come with concentrations of 35 mmol/L, although low-bicarbonate solutions with 25 mmol/L are also available.&nbsp; Acid production in critically ill patients is usually significantly increased compared to normal, so supraphysiologic concentrations of bicarbonate are necessary.&nbsp; Alkalosis can occur in patients with very high fluid flow rates, or in patients whose acid production has decreased due to convalescence.&nbsp;</p>
        <p>The 25 mmol/L bicarbonate concentrations are generally for use with regional citrate anticoagulation (RCA).&nbsp; Each molecule of citrate that reaches the systemic circulation is metabolized by the liver to 3 bicarbonate molecules.&nbsp; High levels of citrate can therefore cause a metabolic alkalosis.&nbsp; The amount of citrate, either unbound or bound to calcium, that reaches the systemic circulation is dependent on the blood flow rate and the flow of replacement or dialysate fluid, but can be as high as 80% of the infused amount.&nbsp; In patients who cannot metabolize citrate due to liver dysfunction, a metabolic acidosis can develop.&nbsp; Calcium bound to citrate is also not released, which leads to a reduced ionized calcium with an unchanged total calcium.&nbsp; In practice, calcium replacement rates are often increased to raise the ionized calcium, and total calcium is slightly high.&nbsp; This is referred to as &ldquo;citrate lock&rdquo; or &ldquo;citrate toxicity,&rdquo; and is treated by reducing the citrate fluid flow rate, or by switching to an alternative form of anticoagulation such as heparin.&nbsp;</p>
        <p><strong>Calcium:&nbsp; </strong>In CRRT solutions, calcium is given in units of mEq/L.&nbsp; Because calcium has a 2+ charge, dividing this value by 2 will give the calcium of mmol/L, which are the units of ionized calcium.&nbsp; Total calcium conversion can be achieved by multiplying by 4.&nbsp;</p>
        <p><strong>Magnesium</strong>:&nbsp; Magnesium is generally found at a concentration of 1.5 mg/dL in pre-made solutions, although some solutions come with 1 mg/dL.&nbsp; Hypomagnesemia should be avoided, and magnesium replacement given systemically if magnesium values are low during CRRT.</p>
        <p><strong>Phosphorous:</strong>&nbsp; Phosphorous is currently not included in most commercial CRRT fluid.&nbsp; This is because it easily precipitates in solution with calcium chloride.&nbsp; There is one commercially available fluid with a concentration of 1 mg/dL.&nbsp; Hypophosphatemia is a very common complication of CRRT, and systemic phosphate repletion must be given regularly.</p>
        <p>&nbsp;</p>
        <h2 className="Textbook-h2" id="acid-base"><p><strong>Acid-Base</strong></p></h2>
        <hr/>
        <p><strong>At a Glance:</strong></p>
        <p>PH is based on the CO<sub>2</sub> and bicarbonate levels in the blood, and are given by the following equation:</p>
        <p>pH= 6.1 + log (HCO<sub>3</sub>&shy; / (0.03 * CO<sub>2</sub>)</p>
        <p>Normal pH is 7.35 to 7.45.&nbsp; Due to increased acid production and decreased clearance of acid, critically ill patients with AKI are often initially acidotic.&nbsp; The Surviving Sepsis Campaign recommended in their 2013 guidelines to maintain pH levels &gt; 7.15.&nbsp;</p>
        <p><strong>&nbsp;</strong></p>
        <p><strong>In-depth (in progress):&nbsp; </strong></p>
        <p>To be completed.&nbsp;</p>
        <p><strong>&nbsp;</strong></p>
        <h2 className="Textbook-h2" id="bloodFlowRate"><p><strong>Blood Flow Rate</strong></p></h2>
        <hr/>
        <p><strong>At a Glance:</strong></p>
        <p>Typical blood flow rates (BFR) range from 150 &ndash; 300 ml/min, depending on the institution.&nbsp; When regional citrate anticoagulation is used, slower blood flow rates are used to minimize the amount of citrate required for anticoagulation (see &ldquo;citrate&rdquo; section for further information).&nbsp; Higher blood flow rates are utilized if possible when RCA is not being used, but can be limited by dialysis access quality.&nbsp;</p>
        <p>Typical BFR at the University of Colorado are 300 mL/min without citrate, and 200 mL/min with citrate.</p>
        <p>&nbsp;</p>
        <p><strong>In-depth (in progress):</strong></p>
        <p>Typical blood flow rates (BFR) range from 150 &ndash; 300 ml/min, depending on the institution.&nbsp; When regional citrate anticoagulation is used, slower blood flow rates are used to minimize the amount of citrate required for anticoagulation.&nbsp; Citrate levels of 4-6 mmol/L are required to maintain post-filter ionized calcium rates below 0.25.&nbsp; With higher BFR, more citrate is required to achieve these blood levels, which can predispose to metabolic alkalosis and require higher amounts of calcium repletion.&nbsp;</p>
        <p>Higher blood flow rates are utilized if possible, when RCA is not being used.&nbsp; A higher BFR allows for a lower filtration fraction (see &ldquo;filtration fraction&rdquo; below), and may disrupt the &ldquo;secondary membrane&rdquo; that forms during CRRT.&nbsp; BFR is often limited by the quality of the access.&nbsp;</p>
        <p>&nbsp;</p>
        <h2 className="Textbook-h2" id="dosing"><p><strong>Dosing</strong></p></h2>
        <hr/>
        <p><strong>At a Glance </strong></p>
        <p className="Textbook-paragraph" id="replacementFluidFlowRate"><strong>Replacement Fluid/Dialysate Fluid Flow Rate:</strong>&nbsp; Dialysis &ldquo;dose&rdquo; in CRRT is determined primarily by your replacement fluid/dialysate fluid flow rate (rate of ultrafiltration is the other factor, but is a much lower flow rate).&nbsp;</p>
        <p>Dose is calculated by dividing the hourly effluent flow rate (replacement/dialysate fluid + ultrafiltration) by the patient&rsquo;s weight in kilograms.&nbsp;</p>
        <p>The recommended dose is 20-25 mL/kg/hr according to KDIGO, but studies have shown that doses from 20 &ndash; 40 have equivalent outcomes.&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <p>&nbsp;</p>
        <p><strong>In-depth (in progress):&nbsp; </strong>Like intermittent hemodialysis, the &ldquo;dose&rdquo; of dialysis delivered in CRRT is calculated based on the clearance of urea.&nbsp;</p>
        <p>Measuring a &ldquo;before&rdquo; and &ldquo;after&rdquo; BUN value, as is done to assess urea clearance in intermittent hemodialysis, is not practical in CRRT because of its continuous nature.&nbsp; Instead, clearance is determined by comparing the concentration of urea in the effluent and in the blood.&nbsp; The sieving coefficient (S) is the concentration in the effluent compared to the blood.</p>
        <p><strong>S<sub>urea</sub> = [Effluent<sub>urea</sub>] / [Blood<sub>urea</sub>] </strong></p>
        <p>Clearance of urea is then calculated based on the following formula:</p>
        <p><strong>Clearance (urea) = S<sub>urea</sub> x Effluent Flow Rate&nbsp; </strong></p>
        <p>The sieving coefficient for urea with diffusive clearance is 1, because at the low dialysate flow rates used in CVVHD, the dialysate becomes fully saturated and completely equilibrates with the blood urea.&nbsp; With convective clearance, sieving coefficient is also 1 because urea is a small molecule that moves freely with water across the membrane.&nbsp; The exception to this is with pre-filter CVVH.&nbsp; Because the blood is being diluted before reaching the membrane, the sieving coefficient will be less than 0.1.&nbsp;&nbsp;&nbsp;</p>
        <p>In the case of pre-filter CVVH, the following correction factor is used to account for dilution:</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p className="Textbook-paragraph" id="grossUltraFiltration"><strong>Volume Control / Ultrafiltration</strong></p>
        <p><strong>At a Glance:&nbsp; </strong>Volume repletion is important in the initial resuscitation of most critically ill patients, such as those with sepsis.&nbsp; However, after the initial 24-48 hours, excess volume has been shown to be detrimental.&nbsp; The goal for most patients on CRRT is to remove fluid.&nbsp; The gross ultrafiltration rate is entered in the CRRT orders, and ideally is higher than the patient&rsquo;s inputs, which can be estimated based on the patient&rsquo;s previous hourly inputs.&nbsp;</p>
        <p>&nbsp;</p>
        <p><strong>In-depth (in progress)</strong></p>
        <p>&nbsp;</p>
        <h2 className="Textbook-h2" id="non-pharmacologic-approach-to-clotting"><p><strong>Non-pharmacologic Approach to Clotting</strong></p></h2>
        <hr/>
        <p><strong>At a Glance:</strong></p>
        <p>Filtration Fraction measures how much the plasma entering the filter is concentrated by ultrafiltration.&nbsp; It should be kept below 25% to reduce clotting.&nbsp;</p>
        <ul>
          <li>Pre-filter CVVH: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
        </ul>
        <p>&nbsp;</p>
        <ul>
          <li>Post-filter CVVH: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
        </ul>
        <p>&nbsp;</p>
        <ul>
          <li>CVVHD:</li>
        </ul>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>To reduce the FF:</p>
        <ul>
          <li>Increase BFR</li>
          <li>Decrease Qr</li>
          <li>Decrease UF</li>
          <li>Use pre-filter CVVHF instead of post-filter</li>
          <li>Use CVVHD instead of CVVHF (pre- or post-filter)</li>
        </ul>
        <p>&nbsp;</p>
        <p><strong>In-Depth (in progress):</strong></p>
        <p>Whenever a filter clots, the fellow should investigate the cause</p>
        <ul>
          <li>Highly negative access pressures (-100 - 150 or less) = Access failure
            <ul>
              <li>Check line for kinking</li>
              <li>Reposition patient</li>
              <li>Reverse arterial and venous lines</li>
              <li>If these are ineffective, replace access</li>
            </ul>
          </li>
          <li>Highly positive return pressures (100 - 150 or more) = Access failure
            <ul>
              <li>Check line for kinking</li>
              <li>Reposition patient</li>
              <li>Reverse arterial and venous lines</li>
              <li>If these are ineffective, replace access</li>
            </ul>
          </li>
          <li>Elevated effluent pressure with decreasing venous pressure = clotting</li>
          <li>Elevated effluent pressure with unchanged venous pressure = clogging
            <ul>
              <li>Seen with pore-clogging due to cytokines, immunoglobulins, or other proteins</li>
            </ul>
          </li>
        </ul>
        <p><strong>&nbsp;</strong></p>
        <p>Filtration Fraction measures how much the plasma entering the filter is concentrated by ultrafiltration.&nbsp; It should be kept below 25% to reduce clotting.&nbsp;</p>
        <p>&nbsp;</p>
        <ul>
          <li>Practically speaking,</li>
        </ul>
        <p>&nbsp;</p>
        <ul>
          <li>For post-filter CVVHF,</li>
        </ul>
        <p>&nbsp;</p>
        <ul>
          <li>Where Qr is Replacement fluid rate in mL/hr, and UF is Ultrafiltration in mL/hr</li>
        </ul>
        <p>&nbsp;</p>
        <p>Example:&nbsp; A patient is started on post-filter CVVHF at a replacement fluid rate of 2L/hr and a gross ultrafiltration of 200 ml/hr.&nbsp; BFR is 300 mL/min.&nbsp; Hct is 30.&nbsp; Filtration fraction is 17.5% ((2,000 mL/hr + 200 mL/hr) / 18,000 (BFR in mL/hour x 0.7)) x 100</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <ul>
          <li>For pre-filter CVVHF,</li>
        </ul>
        <p>&nbsp;</p>
        <p>Example:&nbsp; A patient is started on pre-filter CVVHF at a replacement fluid rate of 2L/hr and a gross ultrafiltration of 200 ml/hr.&nbsp; BFR is 300 mL/min.&nbsp; Hct is 30.&nbsp; Filtration Fraction is 15.1%</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>The patient&rsquo;s replacement fluid rate is increased to 4 L/hr.&nbsp; Filtration Fraction increases to 25.3%</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>((4,000 mL/hr + 200 mL/hr) / (18,000 (BFR in mL/hour x 0.7) + 4,000 mL/hr) x 100</p>
        <p>&nbsp;</p>
        <ul>
          <li>Pre-filter CVVHF will have a lower FF then post-filter CVVHF, if all values are the same</li>
          <li>If Pre-filter CVVHF, increasing the replacement fluid rate will<em> increase</em> the filtration fraction, and <em>increase</em> rates of clotting.</li>
        </ul>
        <p>&nbsp;</p>
        <ul>
          <li>For CVVHD,</li>
        </ul>
        <p>&nbsp;</p>
        <p>Example:&nbsp; A patient is started on pre-filter CVVHD at a dialysate fluid rate of 2L/hr and a gross ultrafiltration of 200 ml/hr.&nbsp; BFR is 300 mL/min.&nbsp; Hct is 30.&nbsp; Filtration Fraction is 1.6%</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <ul>
          <li>CVVHD will always have a lower FF than CVVHF</li>
          <li>To reduce the FF:
            <ul>
              <li>Increase BFR</li>
              <li>Decrease Qr</li>
              <li>Decrease UF</li>
              <li>Use pre-filter CVVHF instead of post-filter</li>
              <li>Use CVVHD instead of CVVHF (pre- or post-filter)</li>
            </ul>
          </li>
          <li>If filter loss is deemed to be due to clotting, despite FF &lt; 25%, initiate &ldquo;CRRT with Citrate&rdquo; Protocol
            <ul>
              <li>If a filter is clotting, attempt to rinse back the patient&rsquo;s blood to avoid decreasing hemoglobin. The circuit has 171 mL of blood in total, 93 mL of that in the filter</li>
            </ul>
          </li>
        </ul>
        <p><strong>&nbsp;</strong></p>
        <h2 className="Textbook-h2" id="Citrate"><p><strong>Regional Citrate Anticoagulation</strong></p></h2>
        <hr/>
        <p><strong>At a Glance:</strong></p>
        <p>Citrate anticoagulation works by chelating (or binding) free calcium in the extracorporeal circuit.&nbsp; In order for the clotting cascade to activate, calcium is required, so binding free calcium disrupts the clotting cascade and inhibits clotting.&nbsp; It requires a pre-filter citrate infusion, as well as a post-filter calcium infusion to avoid hypocalcemia.&nbsp;</p>
        <p className="Textbook-paragraph" id="citrate-flow-rate"><strong><u>Citrate Flow Rate</u>:&nbsp; </strong>
        Citrate infusion is started at 1.5 x BFR at initiation, and titrated based on the post-filter ionized calcium levels.&nbsp; Protocols vary by institution, but the titration protocol used at the University of Colorado is as follows:</p>
        <table className="table">
          <tbody>
            <tr>
              <td width="112">
                <p>Post-filter iCa++ (mmol/L)</p>
              </td>
              <td width="175">
                <p>ACD-A Citrate Infusion Rate (mL/hr)</p>
              </td>
            </tr>
            <tr>
              <td width="112">
                <p>0.5</p>
              </td>
              <td width="175">
                <p>Increase by 10 mL/hr</p>
              </td>
            </tr>
            <tr>
              <td width="112">
                <p>0.41 to 0.5</p>
              </td>
              <td width="175">
                <p>Increase by 5 mL/hr</p>
              </td>
            </tr>
            <tr>
              <td width="112">
                <p>0.25 to 0.4</p>
              </td>
              <td width="175">
                <p>Goal Range, no change</p>
              </td>
            </tr>
            <tr>
              <td width="112">
                <p>&lt; 0.25</p>
              </td>
              <td width="175">
                <p>Decrease by 10 mL/hr</p>
              </td>
            </tr>
          </tbody>
        </table>
        <p>&nbsp;</p>
        <p><strong>&nbsp;</strong></p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p><strong>&nbsp;</strong></p>
        <p><strong><u>Calcium Chloride Rate</u>:&nbsp; </strong>The goal of the calcium chloride infusion is to normalize systemic ionized calcium levels.&nbsp; Protocols vary by institution, but the titration protocol used at the University of Colorado is as follows:</p>
        <table className="table">
          <tbody>
            <tr>
              <td width="234">
                <p>Systemic iCa++ (mmol/L)</p>
              </td>
              <td width="234">
                <p>Calcium Chloride infusion rate (mL/hr)</p>
              </td>
            </tr>
            <tr>
              <td width="234">
                <p>&Oslash;&nbsp; &gt; 1.45</p>
              </td>
              <td width="234">
                <p>Decrease infusion rate by 25 mL/hour.&nbsp; If current infusion rate &lt;25 mL/hour, turn off infusion for 1 hour. After 1 hour, re-check systemic iCa++.&nbsp; If repeat systemic iCa++, GREATER than 1.45, notify nephrology fellow.</p>
              </td>
            </tr>
            <tr>
              <td width="234">
                <p>&Oslash;&nbsp; 1.36 &ndash; 1.45</p>
              </td>
              <td width="234">
                <p>Decrease rate by 12.5 mL/hr</p>
              </td>
            </tr>
            <tr>
              <td width="234">
                <p>&Oslash;&nbsp; 1.1 &ndash; 1.35</p>
              </td>
              <td width="234">
                <p>No change</p>
              </td>
            </tr>
            <tr>
              <td width="234">
                <p>&Oslash;&nbsp; 0.95 &ndash; 1.09</p>
              </td>
              <td width="234">
                <p>Increase by 12.5 mL/hr</p>
              </td>
            </tr>
            <tr>
              <td width="234">
                <p>&Oslash;&nbsp; 0.85 &ndash; 0.94</p>
              </td>
              <td width="234">
                <p>Give calcium chloride 1 g over 15 min AND increase infusion rate by 25 mL/hour. After 1 hour re-check systemic iCa++.&nbsp; If repeat systemic iCa++ LESS than 0.95, notify nephrology fellow.</p>
              </td>
            </tr>
          </tbody>
        </table>
        <p>&nbsp;</p>
        <p><strong>Possible Complications: </strong></p>
        <ul>
          <li>Metabolic Alkalosis. This is due to the liver&rsquo;s conversion of citrate to bicarbonate. Most solutions designed for use with citrate anti-coagulation have a bicarbonate concentration of 25 mmol/L.&nbsp;</li>
          <li>Most Citrate formulations are hyperosmolar. For instance, the Citrate ACD-A 2.2% used at many institutions has a sodium concentration of 225 mEq/L. &nbsp;Most solutions designed for use with citrate anti-coagulation have a sodium concentration of 130 mmol/L.&nbsp;</li>
          <li>Hypocalcemia/Hypercalcemia. Due to inappropriate post-filter calcium supplementation</li>
          <li><strong>Citrate toxicity. </strong>Citrate accumulation can occur in liver disease, and leads to chelation of calcium in the systemic circulation. It is generally marked by falling systemic iCal and escalating Ca infusion requirements by protocol.&nbsp; A calcium ratio (Total Ca x 0.25 / systemic ionized calcium) &gt; 2.5 suggests toxicity, and the treatment is to reduce citrate.&nbsp;</li>
        </ul>
        <p>&nbsp;</p>
        <p><strong>In-depth (in progress):</strong></p>
        <p>&nbsp;</p>
        <h2 className="Textbook-h2" id="hypertonic-saline"><p><strong>Hypertonic Saline</strong></p></h2>
        <hr/>
        <p><strong>At a Glance:</strong></p>
        <p>Rapid correction of chronic hypernatremia can cause brain edema.&nbsp; Raising systemic sodium concentration is also used as a treatment for cerebral edema.&nbsp; Recommendations are to not lower sodium by more than 8 &ndash; 12 mEq/24 hours, unless hypernatremia known to be acute.</p>
        <p>Post-filter 3% NS can be used to avoid rapid lowering of sodium:</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>Calculated 3% infusion rate must be subtracted from desired clearance to calculate replacement fluid or dialysate rate + UF.&nbsp;</p>
        <p>Example:&nbsp; A patient with a sodium of 170 mEq/L is started on CVVHD.&nbsp; If the goal is to correct to 160 mEq/L over 24 hours with a clearance of 2.5 L/hr, 3% saline should be infused at a rate of 134 mL/hr</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>In this case, dialysate rate would be 2.36 L/hr (2.5 - .134), assuming UF is otherwise 0.&nbsp;</p>
        <p><strong>&nbsp;</strong></p>
        <p><strong>In-depth (in progress):</strong></p>
        <p><strong>&nbsp;</strong></p>
        <p><strong>&nbsp;</strong></p>
        <h2 className="Textbook-h2" id="D5W"><p><strong>D5W</strong></p></h2>
        <hr/>
        <p><strong>At a Glance:</strong></p>
        <p>Replacement fluid comes only with [Na] of 140 mEq/L (except for low-bicarb 2K/0Ca, which has 130 mEq/L).&nbsp; Sodium should not be raised more than 8 mEq/24 hrs, unless known to be acute (&lt;48 hours)</p>
        <p>Post-filter D5W can be given to slow rise of sodium:</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>Calculated D5W rate must be subtracted from desired clearance to get replacement fluid or dialysate dose + UF</p>
        <p>Example:&nbsp; A patient with a sodium of 115 is started on CVVHD at a rate of 2.5 L/hr.&nbsp; The desired sodium in 24 hours is 123.&nbsp; The D5W rate should therefore be 300 mL/hr</p>
        <p>In order to maintain the same dose, dialysate should be reduced to 2.2 L/hr (2.5 L/hr &ndash; 0.3 L/hr)</p>
        <p>&nbsp;</p>
        <p><strong>In-depth (in progress):</strong></p>
        <p>&nbsp;</p>
      </div>
    </div>

  
  );
}

export default Textbook;
