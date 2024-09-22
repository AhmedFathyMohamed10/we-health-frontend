<template>
	<div class="disabilities">
		<Base>
			<div class="row">
				<div class="col-md-6">
					<div class="form-group">
		        <div class="field-checkbox d-flex align-items-center">
		          <Checkbox id="binary" :binary="true" v-model="vision" />
		          <label class="mb-0 ms-2" for="binary">Vision</label>
		        </div>
		      </div>
		      <div class="form-group">
		        <div class="field-checkbox d-flex align-items-center">
		          <Checkbox id="binary" :binary="true" v-model="mobility" />
		          <label class="mb-0 ms-2" for="binary">Mobility</label>
		        </div>
		      </div>
		      <div class="form-group">
		        <div class="field-checkbox d-flex align-items-center">
		          <Checkbox id="binary" :binary="true" v-model="hearing" />
		          <label class="mb-0 ms-2" for="binary">Hearing</label>
		        </div>
		      </div>
		      <div class="form-group">
		        <div class="field-checkbox d-flex align-items-center">
		          <Checkbox id="binary" :binary="true" v-model="independentLiving" />
		          <label class="mb-0 ms-2" for="binary">Independent living</label>
		        </div>
		      </div>
		      <div class="form-group">
		        <div class="field-checkbox d-flex align-items-center">
		          <Checkbox id="binary" :binary="true" v-model="cognitive" />
		          <label class="mb-0 ms-2" for="binary">Cognitive</label>
		        </div>
		      </div>
		      <div class="form-group">
		        <div class="field-checkbox d-flex align-items-center">
		          <Checkbox id="binary" :binary="true" v-model="speech" />
		          <label class="mb-0 ms-2" for="binary">Speech</label>
		        </div>
		      </div>
		      <div class="form-group">
		        <div class="field-checkbox d-flex align-items-center">
		          <Checkbox id="binary" :binary="true" v-model="selfCare" />
		          <label class="mb-0 ms-2" for="binary">Self-Care</label>
		        </div>
		      </div>
		      <div class="form-group">
		        <div class="field-checkbox d-flex align-items-center">
		          <Checkbox id="binary" :binary="true" v-model="other" />
		          <label class="mb-0 ms-2" for="binary">Other</label>
		        </div>
		      </div>
		      <div class="form-group" v-if="other == true">
		        <div class="field-checkbox d-flex align-items-center">
		          <input type="text" class='form-control w-50'>
		        </div>
		      </div>
		    </div>
		    <div class="col-md-6">
		    	<div class="vision" v-if="vision == true">
		    		<div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="blindness" />
			          <label class="mb-0 ms-2" for="binary">Blindness</label>
			        </div>
			      </div>
			      <div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="visionConditions" />
			          <label class="mb-0 ms-2" for="binary">Vision conditions</label>
			        </div>
			      </div>
			      <div class="mx-5">
			      	<div class="form-group">
				        <div class="field-checkbox d-flex align-items-center">
				          <Checkbox id="binary" :binary="true" v-model="myopiaNear" />
				          <label class="mb-0 ms-2" for="binary">Myopia (Near-sightedness)</label>
				        </div>
				      </div>
				      <div class="form-group">
				        <div class="field-checkbox d-flex align-items-center">
				          <Checkbox id="binary" :binary="true" v-model="myopiaFar" />
				          <label class="mb-0 ms-2" for="binary">Myopia (Far-sightedness)</label>
				        </div>
				      </div>
				      <div class="form-group">
				        <div class="field-checkbox d-flex align-items-center">
				          <Checkbox id="binary" :binary="true" v-model="astigmatism" />
				          <label class="mb-0 ms-2" for="binary">Astigmatism</label>
				        </div>
				      </div>
			      </div>
			      <div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="lowVision" />
			          <label class="mb-0 ms-2" for="binary">Low Vision</label>
			        </div>
			      </div>
			      <div class="mx-5">
				      <div class="form-group">
				        <div class="field-checkbox d-flex align-items-center">
				          <Checkbox id="binary" :binary="true" v-model="diabeticRetinopathy" />
				          <label class="mb-0 ms-2" for="binary">Diabetic Retinopathy</label>
				        </div>
				      </div>
				      <div class="form-group">
				        <div class="field-checkbox d-flex align-items-center">
				          <Checkbox id="binary" :binary="true" v-model="ageMacular" />
				          <label class="mb-0 ms-2" for="binary">Age-Related Macular Degeneration</label>
				        </div>
				      </div>
				      <div class="form-group">
				        <div class="field-checkbox d-flex align-items-center">
				          <Checkbox id="binary" :binary="true" v-model="glaucoma" />
				          <label class="mb-0 ms-2" for="binary">Glaucoma</label>
				        </div>
				      </div>
				      <div class="form-group">
				        <div class="field-checkbox d-flex align-items-center">
				          <Checkbox id="binary" :binary="true" v-model="cataracts" />
				          <label class="mb-0 ms-2" for="binary">Cataracts</label>
				        </div>
				      </div>
			      </div>
			      <div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="colorBlindness" />
			          <label class="mb-0 ms-2" for="binary">Color Blindness</label>
			        </div>
			      </div>
			      <div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="diabeticRetonipathy" />
			          <label class="mb-0 ms-2" for="binary">Diabetic Retonipathy</label>
			        </div>
			      </div>
			      <div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="ageMacularColor" />
			          <label class="mb-0 ms-2" for="binary">Age-Related Macular Degeneration</label>
			        </div>
			      </div>
			      <div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="glaucomaColor" />
			          <label class="mb-0 ms-2" for="binary">Glaucoma</label>
			        </div>
			      </div>
			      <div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="cataractsColor" />
			          <label class="mb-0 ms-2" for="binary">Cataracts</label>
			        </div>
			      </div>
		    	</div>
		    	<div class="mobility" v-if="mobility == true">
		    		<div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="absent" />
			          <label class="mb-0 ms-2" for="binary">Absent Limb</label>
			        </div>
			      </div>
			      <div class="mx-5">
				      <div class="form-group">
				        <div class="field-checkbox d-flex align-items-center">
				          <Checkbox id="binary" :binary="true" v-model="Birth" />
				          <label class="mb-0 ms-2" for="binary">Birth Defect</label>
				        </div>
				      </div>
			      	<div class="form-group">
				        <div class="field-checkbox d-flex align-items-center">
				          <Checkbox id="binary" :binary="true" v-model="loss" />
				          <label class="mb-0 ms-2" for="binary">Loss of Limbs Through Accidents</label>
				        </div>
				      </div>
				      <div class="form-group">
				        <div class="field-checkbox d-flex align-items-center">
				          <Checkbox id="binary" :binary="true" v-model="amputation" />
				          <label class="mb-0 ms-2" for="binary">Amputation</label>
				        </div>
				      </div>
				    </div>
			      <div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="arthritis" />
			          <label class="mb-0 ms-2" for="binary">Arthritis</label>
			        </div>
			      </div>
			      <div class="mx-5">
				      <div class="form-group">
				        <div class="field-checkbox d-flex align-items-center">
				          <Checkbox id="binary" :binary="true" v-model="osteoarthritis" />
				          <label class="mb-0 ms-2" for="binary">Osteoarthritis</label>
				        </div>
				      </div>
				      <div class="form-group">
				        <div class="field-checkbox d-flex align-items-center">
				          <Checkbox id="binary" :binary="true" v-model="rheumatoid" />
				          <label class="mb-0 ms-2" for="binary">Rheumatoid Arthritis (RA)</label>
				        </div>
				      </div>
				      <div class="form-group">
				        <div class="field-checkbox d-flex align-items-center">
				          <Checkbox id="binary" :binary="true" v-model="Septic" />
				          <label class="mb-0 ms-2" for="binary">Septic Arthritis</label>
				        </div>
				      </div>
				      <div class="form-group">
				        <div class="field-checkbox d-flex align-items-center">
				          <Checkbox id="binary" :binary="true" v-model="Psoriatic" />
				          <label class="mb-0 ms-2" for="binary">Psoriatic Arthritis</label>
				        </div>
				      </div>
				      <div class="form-group">
				        <div class="field-checkbox d-flex align-items-center">
				          <Checkbox id="binary" :binary="true" v-model="autoimmune" />
				          <label class="mb-0 ms-2" for="binary">Autoimmune Diseases</label>
				        </div>
				      </div>
			      </div>
			      <div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="paralysis" />
			          <label class="mb-0 ms-2" for="binary">Paralysis Due to Damage to The Spinal Cord</label>
			        </div>
			      </div>
			      <div class="mx-5">
				      <div class="form-group">
				        <div class="field-checkbox d-flex align-items-center">
				          <Checkbox id="binary" :binary="true" v-model="paraplegia" />
				          <label class="mb-0 ms-2" for="binary">Paraplegia</label>
				        </div>
				      </div>
				      <div class="form-group">
				        <div class="field-checkbox d-flex align-items-center">
				          <Checkbox id="binary" :binary="true" v-model="quadriplegia" />
				          <label class="mb-0 ms-2" for="binary">Quadriplegia/Tetraplegia</label>
				        </div>
				      </div>
			      </div>
			      <div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="palsy" />
			          <label class="mb-0 ms-2" for="binary">Cerebral Palsy</label>
			        </div>
			      </div>
			      <div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="multiple" />
			          <label class="mb-0 ms-2" for="binary">Multiple Sclerosis (MS)</label>
			        </div>
			      </div>
			      <div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="Muscular" />
			          <label class="mb-0 ms-2" for="binary">Muscular Dystrophy (MD)</label>
			        </div>
			      </div>
			      <div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="motor" />
			          <label class="mb-0 ms-2" for="binary">Motor Neurone Disease (MND)</label>
			        </div>
			      </div>
			      <div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="cauda" />
			          <label class="mb-0 ms-2" for="binary">Cauda Equina Syndrome</label>
			        </div>
			      </div>
			      <div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="hemiplegia" />
			          <label class="mb-0 ms-2" for="binary">Hemiplegia</label>
			        </div>
			      </div>
			      <div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="Face" />
			          <label class="mb-0 ms-2" for="binary">Paralysis of The Face</label>
			        </div>
			      </div>
			      <div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="syndrome" />
			          <label class="mb-0 ms-2" for="binary">Guillain-Barre Syndrome</label>
			        </div>
			      </div>
			      <div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="parkinson" />
			          <label class="mb-0 ms-2" for="binary">Parkinson's Disease</label>
			        </div>
			      </div>
			      <div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="polio" />
			          <label class="mb-0 ms-2" for="binary">Polio</label>
			        </div>
			      </div>
		    	</div>
		    	<div class="hearing" v-if="hearing == true">
		    		<div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="mild" />
			          <label class="mb-0 ms-2" for="binary">Mild</label>
			        </div>
			      </div>
			      <div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="Moderate" />
			          <label class="mb-0 ms-2" for="binary">Moderate</label>
			        </div>
			      </div>
			      <div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="Severe" />
			          <label class="mb-0 ms-2" for="binary">Severe</label>
			        </div>
			      </div>
			      <div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="Profound" />
			          <label class="mb-0 ms-2" for="binary">Profound</label>
			        </div>
			      </div>
			    </div>
			    <div class="independentLiving" v-if="independentLiving == true">
		    		<div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="Information" />
			          <label class="mb-0 ms-2" for="binary">Information</label>
			        </div>
			      </div>
			      <div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="peerSupport" />
			          <label class="mb-0 ms-2" for="binary">Peer support</label>
			        </div>
			      </div>
			      <div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="equ" />
			          <label class="mb-0 ms-2" for="binary">Equipment aid and adaptions</label>
			        </div>
			      </div>
			      <div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="personal" />
			          <label class="mb-0 ms-2" for="binary">Personal assistance</label>
			        </div>
			      </div>
			      <div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="Transport" />
			          <label class="mb-0 ms-2" for="binary">Transport</label>
			        </div>
			      </div>
			      <div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="Accessible" />
			          <label class="mb-0 ms-2" for="binary">Accessible enviroment</label>
			        </div>
			      </div>
			    </div>
			    <div class="cognitive" v-if="cognitive == true">
		    		<div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="Mental" />
			          <label class="mb-0 ms-2" for="binary">Mental Retardation</label>
			        </div>
			      </div>
			      <div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="Attention" />
			          <label class="mb-0 ms-2" for="binary">Attention-deficit Hyperactivity Disorder (ADHD)</label>
			        </div>
			      </div>
			      <div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="Dyslexia" />
			          <label class="mb-0 ms-2" for="binary">Dyslexia</label>
			        </div>
			      </div>
			      <div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="Aphasia" />
			          <label class="mb-0 ms-2" for="binary">Aphasia</label>
			        </div>
			      </div>
			      <div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="Brain" />
			          <label class="mb-0 ms-2" for="binary">Brain injury</label>
			        </div>
			      </div>
			      <div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="Language" />
			          <label class="mb-0 ms-2" for="binary">Language delay</label>
			        </div>
			      </div>
			      <div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="Learning" />
			          <label class="mb-0 ms-2" for="binary">Learning disabilities</label>
			        </div>
			      </div>
			      <div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="Autism" />
			          <label class="mb-0 ms-2" for="binary">Autism</label>
			        </div>
			      </div>
			      <div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="Dyscalculia" />
			          <label class="mb-0 ms-2" for="binary">Dyscalculia</label>
			        </div>
			      </div>
			      <div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="Intellectual" />
			          <label class="mb-0 ms-2" for="binary">Intellectual</label>
			        </div>
			      </div>
			      <div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="Memory" />
			          <label class="mb-0 ms-2" for="binary">Memory loss</label>
			        </div>
			      </div>
			      <div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="Down" />
			          <label class="mb-0 ms-2" for="binary">Down Syndrome</label>
			        </div>
			      </div>
			      <div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="Epilepsy" />
			          <label class="mb-0 ms-2" for="binary">Epilepsy</label>
			        </div>
			      </div>
			      <div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="peerSupportCog" />
			          <label class="mb-0 ms-2" for="binary">Peer support</label>
			        </div>
			      </div>
			      <div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="CerebralPalsy" />
			          <label class="mb-0 ms-2" for="binary">Cerebral palsy</label>
			        </div>
			      </div>
			    </div>
			    <div class="speech" v-if="speech == true">
		    		<div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="Apraxia" />
			          <label class="mb-0 ms-2" for="binary">Apraxia of Speech (AOS)</label>
			        </div>
			      </div>
			      <div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="Orofacial" />
			          <label class="mb-0 ms-2" for="binary">Orofacial Myofunctional Disorders</label>
			        </div>
			      </div>
			      <div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="SpeechSound" />
			          <label class="mb-0 ms-2" for="binary">Speech Sound Disorders/Articulation Disorders</label>
			        </div>
			      </div>
			      <div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="Stuttering" />
			          <label class="mb-0 ms-2" for="binary">Stuttering - Stammering</label>
			        </div>
			      </div>
			      <div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="Receptive" />
			          <label class="mb-0 ms-2" for="binary">Receptive Disorders</label>
			        </div>
			      </div>
			      <div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="AutismSpeech" />
			          <label class="mb-0 ms-2" for="binary">Autism-Related Speech Disorders</label>
			        </div>
			      </div>
			      <div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="Resonance" />
			          <label class="mb-0 ms-2" for="binary">Resonance Disorders</label>
			        </div>
			      </div>
			      <div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="BrainInjury" />
			          <label class="mb-0 ms-2" for="binary">Brain Injury-Related Speech Disorders/Dysarthria</label>
			        </div>
			      </div>
			      <div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="Dysarthria" />
			          <label class="mb-0 ms-2" for="binary">Dysarthria</label>
			        </div>
			      </div>
			      <div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="IntellectualSpeech" />
			          <label class="mb-0 ms-2" for="binary">Intellectual</label>
			        </div>
			      </div>
			      <div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="Lisping" />
			          <label class="mb-0 ms-2" for="binary">Lisping</label>
			        </div>
			      </div>
			      <div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="Spasmodic" />
			          <label class="mb-0 ms-2" for="binary">Spasmodic Dysphonia</label>
			        </div>
			      </div>
			      <div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="Cluttering" />
			          <label class="mb-0 ms-2" for="binary">Cluttering</label>
			        </div>
			      </div>
			      <div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="Muteness" />
			          <label class="mb-0 ms-2" for="binary">Muteness - Selective Mutism</label>
			        </div>
			      </div>
			      <div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="AphasiaSpeech" />
			          <label class="mb-0 ms-2" for="binary">Aphasia</label>
			        </div>
			      </div>
			      <div class="form-group">
			        <div class="field-checkbox d-flex align-items-center">
			          <Checkbox id="binary" :binary="true" v-model="SpeechDelay" />
			          <label class="mb-0 ms-2" for="binary">Speech Delay - Alalia</label>
			        </div>
			      </div>
			    </div>
		    </div>
		  </div>
		</Base>
		<Base>
			<div class="row">
				<div class="col-md-12">
					<h4>This disability causes substantial functional limitations in the following areas:</h4>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6">
					<div class="form-group">
		        <div class="field-checkbox d-flex align-items-center">
		          <Checkbox id="binary" :binary="true" v-model="Frequent" />
		          <label class="mb-0 ms-2" for="binary">Frequent Memory/Cognitive Issues</label>
		        </div>
		      </div>
		      <div class="form-group">
		        <div class="field-checkbox d-flex align-items-center">
		          <Checkbox id="binary" :binary="true" v-model="Receptivex" />
		          <label class="mb-0 ms-2" for="binary">Receptive & Expressive Language</label>
		        </div>
		      </div>
		      <div class="form-group">
		        <div class="field-checkbox d-flex align-items-center">
		          <Checkbox id="binary" :binary="true" v-model="Bathing" />
		          <label class="mb-0 ms-2" for="binary">Bathing</label>
		        </div>
		      </div>
		      <div class="form-group">
		        <div class="field-checkbox d-flex align-items-center">
		          <Checkbox id="binary" :binary="true" v-model="SelfDirection" />
		          <label class="mb-0 ms-2" for="binary">Self-Direction</label>
		        </div>
		      </div>
		      <div class="form-group">
		        <div class="field-checkbox d-flex align-items-center">
		          <Checkbox id="binary" :binary="true" v-model="GroomingHygiene" />
		          <label class="mb-0 ms-2" for="binary">Grooming/Hygiene</label>
		        </div>
		      </div>
		      <div class="form-group">
		        <div class="field-checkbox d-flex align-items-center">
		          <Checkbox id="binary" :binary="true" v-model="WorkSkills" />
		          <label class="mb-0 ms-2" for="binary">Work Skills</label>
		        </div>
		      </div>
		      <div class="form-group">
		        <div class="field-checkbox d-flex align-items-center">
		          <Checkbox id="binary" :binary="true" v-model="Toilet" />
		          <label class="mb-0 ms-2" for="binary">Toilet Use</label>
		        </div>
		      </div>
		      <div class="form-group">
		        <div class="field-checkbox d-flex align-items-center">
		          <Checkbox id="binary" :binary="true" v-model="Mobilityd" />
		          <label class="mb-0 ms-2" for="binary">Mobility</label>
		        </div>
		      </div>
		      <div class="form-group">
		        <div class="field-checkbox d-flex align-items-center">
		          <Checkbox id="binary" :binary="true" v-model="Positioning" />
		          <label class="mb-0 ms-2" for="binary">Transferring/Positioning</label>
		        </div>
		      </div>
		      <div class="form-group">
		        <div class="field-checkbox d-flex align-items-center">
		          <Checkbox id="binary" :binary="true" v-model="Medication" />
		          <label class="mb-0 ms-2" for="binary">Medication Management</label>
		        </div>
		      </div>
		      <div class="form-group">
		        <div class="field-checkbox d-flex align-items-center">
		          <Checkbox id="binary" :binary="true" v-model="Fall" />
		          <label class="mb-0 ms-2" for="binary">Fall History</label>
		        </div>
		      </div>
		      <div class="form-group">
		        <div class="field-checkbox d-flex align-items-center">
		          <Checkbox id="binary" :binary="true" v-model="Learningd" />
		          <label class="mb-0 ms-2" for="binary">Learning</label>
		        </div>
		      </div>
		      <div class="form-group">
		        <div class="field-checkbox d-flex align-items-center">
		          <Checkbox id="binary" :binary="true" v-model="Dressing" />
		          <label class="mb-0 ms-2" for="binary">Dressing</label>
		        </div>
		      </div>
				</div>
				<div class="col-md-6">
					<h5>Check item(s) affecting ability to eat:</h5>
					<div class="form-group">
		        <div class="field-checkbox d-flex align-items-center">
		          <Checkbox id="binary" :binary="true" v-model="Preparation" />
		          <label class="mb-0 ms-2" for="binary">Food Preparation</label>
		        </div>
		      </div>
		      <div class="form-group">
		        <div class="field-checkbox d-flex align-items-center">
		          <Checkbox id="binary" :binary="true" v-model="Choking" />
		          <label class="mb-0 ms-2" for="binary">Choking</label>
		        </div>
		      </div>
		      <div class="form-group">
		        <div class="field-checkbox d-flex align-items-center">
		          <Checkbox id="binary" :binary="true" v-model="Swallowing" />
		          <label class="mb-0 ms-2" for="binary">Swallowing</label>
		        </div>
		      </div>
		      <div class="form-group">
		        <div class="field-checkbox d-flex align-items-center">
		          <Checkbox id="binary" :binary="true" v-model="Taste" />
		          <label class="mb-0 ms-2" for="binary">Taste</label>
		        </div>
		      </div>
		      <div class="form-group">
		        <div class="field-checkbox d-flex align-items-center">
		          <Checkbox id="binary" :binary="true" v-model="NauseaVomiting" />
		          <label class="mb-0 ms-2" for="binary">Nausea/Vomiting</label>
		        </div>
		      </div>
		      <div class="form-group">
		        <div class="field-checkbox d-flex align-items-center">
		          <Checkbox id="binary" :binary="true" v-model="cut" />
		          <label class="mb-0 ms-2" for="binary">Cutting Up Food</label>
		        </div>
		      </div>
		      <div class="form-group">
		        <div class="field-checkbox d-flex align-items-center">
		          <Checkbox id="binary" :binary="true" v-model="Opening" />
		          <label class="mb-0 ms-2" for="binary">Opening Containers</label>
		        </div>
		      </div>
		      <div class="form-group">
		        <div class="field-checkbox d-flex align-items-center">
		          <Checkbox id="binary" :binary="true" v-model="Dentures" />
		          <label class="mb-0 ms-2" for="binary">Dentures (Lack of/Poor Fit)</label>
		        </div>
		      </div>
		      <div class="form-group">
		        <div class="field-checkbox d-flex align-items-center">
		          <Checkbox id="binary" :binary="true" v-model="Positioningx" />
		          <label class="mb-0 ms-2" for="binary">Transferring/Positioning</label>
		        </div>
		      </div>
		      <div class="form-group">
		        <div class="field-checkbox d-flex align-items-center">
		          <Checkbox id="binary" :binary="true" v-model="Medicationx" />
		          <label class="mb-0 ms-2" for="binary">Medication Management</label>
		        </div>
		      </div>
		      <div class="form-group">
		        <div class="field-checkbox d-flex align-items-center">
		          <Checkbox id="binary" :binary="true" v-model="None" />
		          <label class="mb-0 ms-2" for="binary">None</label>
		        </div>
		      </div>
				</div>
			</div>
		</Base>
		<div class="action-btn my-2">
      <Base>
	      <div class="btns-wrapper justify-content-center justify-content-sm-end d-flex gap-2 flex-wrap">
	        <button class="btn btn-success-gradient btn-pill w-md my-2 my-sm-0">
	          Save
	        </button>
	        <button class="btn btn-danger-gradient btn-pill w-md my-2 my-sm-0">
	          Cancel
	        </button>
	      </div>
      </Base>
    </div>
	</div>
</template>
<script>
import Base from "@/components/global/utilities/Base.vue";
export default {
  components: {
    Base,
  },
  data() {
    return {
    	vision: '',
			mobility: '',
			hearing: '',
			independentLiving: '',
			cognitive: '',
			speech: '',
			selfCare: '',
			other: '',

			blindness: '',
			visionConditions: '',
			myopiaNear: '',
			myopiaFar: '',
			astigmatism: '',
			lowVision: '',
			diabeticRetinopathy: '',
			ageMacular: '',
			glaucoma: '',
			cataracts: '',
			colorBlindness: '',
			diabeticRetonipathy: '',
			ageMacularColor: '',
			glaucomaColor: '',
			cataractsColor: '',

			absent: '',
			Birth: '',
			loss: '',
			amputation: '',
			arthritis: '',
			osteoarthritis: '',
			rheumatoid: '',
			Septic: '',
			Psoriatic: '',
			autoimmune: '',
			paralysis: '',
			paraplegia: '',
			quadriplegia: '',
			tetraplegia: '',
			palsy: '',
			multiple: '',
			Muscular: '',
			motor: '',
			cauda: '',
			hemiplegia: '',
			Face: '',
			syndrome: '',
			parkinson: '',
			polio: '',

			mild: '',
			Moderate: '',
			Severe: '',
			Profound: '',

			Information: '',
			peerSupport: '',
			equ: '',
			personal: '',
			Transport: '',
			Accessible: '',

			Mental: '',
			Attention: '',
			Dyslexia: '',
			Aphasia: '',
			Brain: '',
			Language: '',
			Learning: '',
			Autism: '',
			Dyscalculia: '',
			Intellectual: '',
			Memory: '',
			Down: '',
			Epilepsy: '',
			peerSupportCog: '',
			CerebralPalsy: '',

			Apraxia: '',
			Orofacial: '',
			SpeechSound: '',
			Stuttering: '',
			Receptive: '',
			AutismSpeech: '',
			Resonance: '',
			BrainInjury: '',
			Dysarthria: '',
			IntellectualSpeech: '',
			Lisping: '',
			Spasmodic: '',
			Cluttering: '',
			Muteness: '',
			AphasiaSpeech: '',
			SpeechDelay: '',

			Frequent: '',
			Receptivex: '',
			Bathing: '',
			SelfDirection: '',
			GroomingHygiene: '',
			WorkSkills: '',
			Toilet: '',
			Mobilityd: '',
			Positioning: '',
			Medication: '',
			Fall: '',
			Learningd: '',
			Dressing: '',

			Preparation: '',
			Choking: '',
			Swallowing: '',
			Taste: '',
			NauseaVomiting: '',
			cut: '',
			Opening: '',
			Dentures: '',
			Positioningx: '',
			Medicationx: '',
			None: '',
    };
  },
  watch: {
  	"vision": {
  		handler(){
  			if (this.vision == true) {
  				this.mobility = false
  				this.hearing = false
					this.independentLiving = false
					this.cognitive = false
					this.speech = false
					this.selfCare = false
					this.other = false
  			}
  		}
  	},
  	"mobility": {
  		handler(){
  			if (this.mobility == true) {
  				this.vision = false
  				this.hearing = false
					this.independentLiving = false
					this.cognitive = false
					this.speech = false
					this.selfCare = false
					this.other = false
  			}
  		}
  	},
  	"hearing": {
  		handler(){
  			if (this.hearing == true) {
  				this.vision = false
  				this.mobility = false
					this.independentLiving = false
					this.cognitive = false
					this.speech = false
					this.selfCare = false
					this.other = false
  			}
  		}
  	},
  	"independentLiving": {
  		handler(){
  			if (this.independentLiving == true) {
  				this.vision = false
  				this.mobility = false
					this.hearing = false
					this.cognitive = false
					this.speech = false
					this.selfCare = false
					this.other = false
  			}
  		}
  	},
  	"cognitive": {
  		handler(){
  			if (this.cognitive == true) {
  				this.vision = false
  				this.mobility = false
					this.hearing = false
					this.independentLiving = false
					this.speech = false
					this.selfCare = false
					this.other = false
  			}
  		}
  	},
  	"speech": {
  		handler(){
  			if (this.speech == true) {
  				this.vision = false
  				this.mobility = false
					this.hearing = false
					this.independentLiving = false
					this.cognitive = false
					this.selfCare = false
					this.other = false
  			}
  		}
  	},
  	"selfCare": {
  		handler(){
  			if (this.selfCare == true) {
  				this.vision = false
  				this.mobility = false
					this.hearing = false
					this.independentLiving = false
					this.cognitive = false
					this.speech = false
					this.other = false
  			}
  		}
  	},
  	"other": {
  		handler(){
  			if (this.other == true) {
  				this.vision = false
  				this.mobility = false
					this.hearing = false
					this.independentLiving = false
					this.cognitive = false
					this.speech = false
					this.selfCare = false
  			}
  		}
  	},
  }
}
</script>
<style scoped>
	.form-group {
		margin-bottom: 5px !important;
	}
</style>