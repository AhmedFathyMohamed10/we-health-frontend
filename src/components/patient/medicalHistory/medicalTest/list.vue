<template>
	<div class="patient-rx">
		<Base class="pb-0">
			<div class="d-flex justify-content-start">
				<div class="d-flex align-items-center gap-2 w-100">
	        <label for="" class="form-label">Search</label>
	        <input type="text" class="form-control w-80" placeholder="case name">
          <Button icon="fa-solid fa-search" />
				</div>
        <div class="d-flex align-items-center mx-3 w-100">
	        <label for="" class="form-label w-15">Sort by</label>
	        <Dropdown :options="options" optionLabel="name" placeholder="Date" />
        </div>
        <div class="d-flex align-items-center gap-2 w-30">
	        <span class="form-label">Add new</span>
	        <AddButton @add="displayDialog"></AddButton>
        </div>
      </div>
		</Base>
		<div class="row">
			<div class="col-md-6">
				<Base>
					<div class="d-flex justify-content-between">
						<div class="d-flex align-items-center gap-2">
		          <Avatar image="/assets/images/users/1.jpg" size="medium" shape="circle" class="custom-size" />
		          <h6 class="mb-0">Doctor name</h6>
		          <i class="fa-solid fa-circle-check"></i>
		        </div>
						<div></div>
						<div class="d-flex align-items-center gap-2">
		          <span class="form-label">Date: </span>
		          <span class="form-label primary-color">20 May 2024</span>
		        </div>
		        <div class="d-flex align-items-center p-2">
		        	<i class="fa-solid fa-ellipsis-vertical fs-4"></i>
		        </div>
					</div>
					<hr class="modify-hr">
					<div class="d-flex justify-content-between">
						<div class="d-flex align-items-center gap-2">
		          <span class="form-label">Diagnosis: </span>
		          <span class="form-label primary-color">Our Partnership with OpenAI</span>
		        </div>
						<div class="d-flex align-items-center gap-2 px-5">
		          <Avatar image="/assets/images/users/1.jpg" size="medium" shape="circle" class="custom-size" />
		          <h6 class="mb-0">Lab name</h6>
		        </div>
					</div>
					<hr class="modify-hr">
					<div class="d-flex justify-content-between">
						<div class="d-flex align-items-center gap-2">
		          <span class="form-label">Test name: </span>
		          <span class="form-label primary-color">CBC</span>
		        </div>
					</div>
        <div class="row">
          <div class="col-12">
            <div class="table-responsive">
              <table class="table table-sm text-center">
                <thead>
                  <tr>
                    <th scope="col">Component</th>
                    <th scope="col">Value</th>
                    <th scope="col">Reference</th>
                    <th scope="col">Unit</th>
                    <th scope="col">Flag</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="align-middle fw-bold">
                      <span>CBC test</span>
                    </td>
                    <td class="align-middle fw-bold">
                      <span>43</span>
                    </td>
                    <td class="align-middle fw-bold">
                      30:35
                    </td>
                    <td class="align-middle fw-bold">
                      <span>Red test</span>
                    </td>

                    <td class="align-middle">
                      <div class="d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-circle-up"></i>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="align-middle fw-bold">
                      <span>CBC test</span>
                    </td>
                    <td class="align-middle fw-bold">
                      <span>43</span>
                    </td>
                    <td class="align-middle fw-bold">
                      30:35
                    </td>
                    <td class="align-middle fw-bold">
                      <span>Red test</span>
                    </td>

                    <td class="align-middle">
                      <div class="d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-circle-down"></i>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="align-middle fw-bold">
                      <span>CBC test</span>
                    </td>
                    <td class="align-middle fw-bold">
                      <span>43</span>
                    </td>
                    <td class="align-middle fw-bold">
                      30:35
                    </td>
                    <td class="align-middle fw-bold">
                      <span>Red test</span>
                    </td>

                    <td class="align-middle">
                      <div class="d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-circle-minus"></i>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="align-middle fw-bold">
                      <span>CBC test</span>
                    </td>
                    <td class="align-middle fw-bold">
                      <span>43</span>
                    </td>
                    <td class="align-middle fw-bold">
                      30:35
                    </td>
                    <td class="align-middle fw-bold">
                      <span>Red test</span>
                    </td>

                    <td class="align-middle">
                      <div class="d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-circle-up"></i>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="align-middle fw-bold">
                      <span>CBC test</span>
                    </td>
                    <td class="align-middle fw-bold">
                      <span>43</span>
                    </td>
                    <td class="align-middle fw-bold">
                      30:35
                    </td>
                    <td class="align-middle fw-bold">
                      <span>Red test</span>
                    </td>

                    <td class="align-middle">
                      <div class="d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-circle-down"></i>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <hr class="modify-hr">
				<div class="d-flex justify-content-between">
					<div class="d-flex align-items-center gap-2">
	          <span class="form-label">Comment: </span>
	          <span class="form-label primary-color">the biggest and best library 50ML tablet, Septazole 50ML tablet</span>
	        </div>
				</div>
        <hr class="modify-hr">
				<div class="d-flex justify-content-start gap-4">
					<div v-for="img in defaultImages.images" :key="img.id" class="d-flex align-items-center gap-2">
	          <img :src="img.src">
	        </div>
				</div>
			</Base>				
			</div>
			<div class="col-md-6">
				<Base>
					<div class="d-flex justify-content-between">
						<div class="d-flex align-items-center gap-2">
		          <Avatar image="/assets/images/users/1.jpg" size="medium" shape="circle" class="custom-size" />
		          <h6 class="mb-0">Doctor name</h6>
		          <i class="fa-solid fa-circle-check"></i>
		        </div>
						<div></div>
						<div class="d-flex align-items-center gap-2">
		          <span class="form-label">Date: </span>
		          <span class="form-label primary-color">20 May 2024</span>
		        </div>
		        <div class="d-flex align-items-center p-2">
		        	<i class="fa-solid fa-ellipsis-vertical fs-4"></i>
		        </div>
					</div>
					<hr class="modify-hr">
					<div class="d-flex justify-content-between">
						<div class="d-flex align-items-center gap-2">
		          <span class="form-label">Diagnosis: </span>
		          <span class="form-label primary-color">Our Partnership with OpenAI</span>
		        </div>
						<div class="d-flex align-items-center gap-2 px-5">
		          <Avatar image="/assets/images/users/1.jpg" size="medium" shape="circle" class="custom-size" />
		          <h6 class="mb-0">Lab name</h6>
		        </div>
					</div>
					<hr class="modify-hr">
					<div class="d-flex justify-content-between">
						<div class="d-flex align-items-center gap-2">
		          <span class="form-label">Test name: </span>
		          <span class="form-label primary-color">CBC</span>
		        </div>
					</div>
        <div class="row">
          <div class="col-12">
            <div class="table-responsive">
              <table class="table table-sm text-center">
                <thead>
                  <tr>
                    <th scope="col">Component</th>
                    <th scope="col">Value</th>
                    <th scope="col">Reference</th>
                    <th scope="col">Unit</th>
                    <th scope="col">Flag</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="align-middle fw-bold">
                      <span>CBC test</span>
                    </td>
                    <td class="align-middle fw-bold">
                      <span>43</span>
                    </td>
                    <td class="align-middle fw-bold">
                      30:35
                    </td>
                    <td class="align-middle fw-bold">
                      <span>Red test</span>
                    </td>

                    <td class="align-middle">
                      <div class="d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-circle-up"></i>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="align-middle fw-bold">
                      <span>CBC test</span>
                    </td>
                    <td class="align-middle fw-bold">
                      <span>43</span>
                    </td>
                    <td class="align-middle fw-bold">
                      30:35
                    </td>
                    <td class="align-middle fw-bold">
                      <span>Red test</span>
                    </td>

                    <td class="align-middle">
                      <div class="d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-circle-down"></i>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="align-middle fw-bold">
                      <span>CBC test</span>
                    </td>
                    <td class="align-middle fw-bold">
                      <span>43</span>
                    </td>
                    <td class="align-middle fw-bold">
                      30:35
                    </td>
                    <td class="align-middle fw-bold">
                      <span>Red test</span>
                    </td>

                    <td class="align-middle">
                      <div class="d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-circle-minus"></i>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="align-middle fw-bold">
                      <span>CBC test</span>
                    </td>
                    <td class="align-middle fw-bold">
                      <span>43</span>
                    </td>
                    <td class="align-middle fw-bold">
                      30:35
                    </td>
                    <td class="align-middle fw-bold">
                      <span>Red test</span>
                    </td>

                    <td class="align-middle">
                      <div class="d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-circle-up"></i>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="align-middle fw-bold">
                      <span>CBC test</span>
                    </td>
                    <td class="align-middle fw-bold">
                      <span>43</span>
                    </td>
                    <td class="align-middle fw-bold">
                      30:35
                    </td>
                    <td class="align-middle fw-bold">
                      <span>Red test</span>
                    </td>

                    <td class="align-middle">
                      <div class="d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-circle-down"></i>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <hr class="modify-hr">
				<div class="d-flex justify-content-between">
					<div class="d-flex align-items-center gap-2">
	          <span class="form-label">Comment: </span>
	          <span class="form-label primary-color">the biggest and best library 50ML tablet, Septazole 50ML tablet</span>
	        </div>
				</div>
        <hr class="modify-hr">
				<div class="d-flex justify-content-start gap-4">
					<div v-for="img in defaultImages.images" :key="img.id" class="d-flex align-items-center gap-2">
	          <img :src="img.src">
	        </div>
				</div>
			</Base>				
			</div>
			<div class="col-md-6">
				<Base>
					<div class="d-flex justify-content-between">
						<div class="d-flex align-items-center gap-2">
		          <Avatar image="/assets/images/users/1.jpg" size="medium" shape="circle" class="custom-size" />
		          <h6 class="mb-0">Doctor name</h6>
		          <i class="fa-solid fa-circle-check"></i>
		        </div>
						<div></div>
						<div class="d-flex align-items-center gap-2">
		          <span class="form-label">Date: </span>
		          <span class="form-label primary-color">20 May 2024</span>
		        </div>
		        <div class="d-flex align-items-center p-2">
		        	<i class="fa-solid fa-ellipsis-vertical fs-4"></i>
		        </div>
					</div>
					<hr class="modify-hr">
					<div class="d-flex justify-content-between">
						<div class="d-flex align-items-center gap-2">
		          <span class="form-label">Diagnosis: </span>
		          <span class="form-label primary-color">Our Partnership with OpenAI</span>
		        </div>
						<div class="d-flex align-items-center gap-2 px-5">
		          <Avatar image="/assets/images/users/1.jpg" size="medium" shape="circle" class="custom-size" />
		          <h6 class="mb-0">Lab name</h6>
		        </div>
					</div>
					<hr class="modify-hr">
					<div class="d-flex justify-content-between">
						<div class="d-flex align-items-center gap-2">
		          <span class="form-label">Test name: </span>
		          <span class="form-label primary-color">CBC</span>
		        </div>
					</div>
        <div class="row">
          <div class="col-12">
            <div class="table-responsive">
              <table class="table table-sm text-center">
                <thead>
                  <tr>
                    <th scope="col">Component</th>
                    <th scope="col">Value</th>
                    <th scope="col">Reference</th>
                    <th scope="col">Unit</th>
                    <th scope="col">Flag</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="align-middle fw-bold">
                      <span>CBC test</span>
                    </td>
                    <td class="align-middle fw-bold">
                      <span>43</span>
                    </td>
                    <td class="align-middle fw-bold">
                      30:35
                    </td>
                    <td class="align-middle fw-bold">
                      <span>Red test</span>
                    </td>

                    <td class="align-middle">
                      <div class="d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-circle-up"></i>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="align-middle fw-bold">
                      <span>CBC test</span>
                    </td>
                    <td class="align-middle fw-bold">
                      <span>43</span>
                    </td>
                    <td class="align-middle fw-bold">
                      30:35
                    </td>
                    <td class="align-middle fw-bold">
                      <span>Red test</span>
                    </td>

                    <td class="align-middle">
                      <div class="d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-circle-down"></i>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="align-middle fw-bold">
                      <span>CBC test</span>
                    </td>
                    <td class="align-middle fw-bold">
                      <span>43</span>
                    </td>
                    <td class="align-middle fw-bold">
                      30:35
                    </td>
                    <td class="align-middle fw-bold">
                      <span>Red test</span>
                    </td>

                    <td class="align-middle">
                      <div class="d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-circle-minus"></i>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="align-middle fw-bold">
                      <span>CBC test</span>
                    </td>
                    <td class="align-middle fw-bold">
                      <span>43</span>
                    </td>
                    <td class="align-middle fw-bold">
                      30:35
                    </td>
                    <td class="align-middle fw-bold">
                      <span>Red test</span>
                    </td>

                    <td class="align-middle">
                      <div class="d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-circle-up"></i>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="align-middle fw-bold">
                      <span>CBC test</span>
                    </td>
                    <td class="align-middle fw-bold">
                      <span>43</span>
                    </td>
                    <td class="align-middle fw-bold">
                      30:35
                    </td>
                    <td class="align-middle fw-bold">
                      <span>Red test</span>
                    </td>

                    <td class="align-middle">
                      <div class="d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-circle-down"></i>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <hr class="modify-hr">
				<div class="d-flex justify-content-between">
					<div class="d-flex align-items-center gap-2">
	          <span class="form-label">Comment: </span>
	          <span class="form-label primary-color">the biggest and best library 50ML tablet, Septazole 50ML tablet</span>
	        </div>
				</div>
        <hr class="modify-hr">
				<div class="d-flex justify-content-start gap-4">
					<div v-for="img in defaultImages.images" :key="img.id" class="d-flex align-items-center gap-2">
	          <img :src="img.src">
	        </div>
				</div>
			</Base>				
			</div>
			<div class="col-md-6">
				<Base>
					<div class="d-flex justify-content-between">
						<div class="d-flex align-items-center gap-2">
		          <Avatar image="/assets/images/users/1.jpg" size="medium" shape="circle" class="custom-size" />
		          <h6 class="mb-0">Doctor name</h6>
		          <i class="fa-solid fa-circle-check"></i>
		        </div>
						<div></div>
						<div class="d-flex align-items-center gap-2">
		          <span class="form-label">Date: </span>
		          <span class="form-label primary-color">20 May 2024</span>
		        </div>
		        <div class="d-flex align-items-center p-2">
		        	<i class="fa-solid fa-ellipsis-vertical fs-4"></i>
		        </div>
					</div>
					<hr class="modify-hr">
					<div class="d-flex justify-content-between">
						<div class="d-flex align-items-center gap-2">
		          <span class="form-label">Diagnosis: </span>
		          <span class="form-label primary-color">Our Partnership with OpenAI</span>
		        </div>
						<div class="d-flex align-items-center gap-2 px-5">
		          <Avatar image="/assets/images/users/1.jpg" size="medium" shape="circle" class="custom-size" />
		          <h6 class="mb-0">Lab name</h6>
		        </div>
					</div>
					<hr class="modify-hr">
					<div class="d-flex justify-content-between">
						<div class="d-flex align-items-center gap-2">
		          <span class="form-label">Test name: </span>
		          <span class="form-label primary-color">CBC</span>
		        </div>
					</div>
        <div class="row">
          <div class="col-12">
            <div class="table-responsive">
              <table class="table table-sm text-center">
                <thead>
                  <tr>
                    <th scope="col">Component</th>
                    <th scope="col">Value</th>
                    <th scope="col">Reference</th>
                    <th scope="col">Unit</th>
                    <th scope="col">Flag</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="align-middle fw-bold">
                      <span>CBC test</span>
                    </td>
                    <td class="align-middle fw-bold">
                      <span>43</span>
                    </td>
                    <td class="align-middle fw-bold">
                      30:35
                    </td>
                    <td class="align-middle fw-bold">
                      <span>Red test</span>
                    </td>

                    <td class="align-middle">
                      <div class="d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-circle-up"></i>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="align-middle fw-bold">
                      <span>CBC test</span>
                    </td>
                    <td class="align-middle fw-bold">
                      <span>43</span>
                    </td>
                    <td class="align-middle fw-bold">
                      30:35
                    </td>
                    <td class="align-middle fw-bold">
                      <span>Red test</span>
                    </td>

                    <td class="align-middle">
                      <div class="d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-circle-down"></i>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="align-middle fw-bold">
                      <span>CBC test</span>
                    </td>
                    <td class="align-middle fw-bold">
                      <span>43</span>
                    </td>
                    <td class="align-middle fw-bold">
                      30:35
                    </td>
                    <td class="align-middle fw-bold">
                      <span>Red test</span>
                    </td>

                    <td class="align-middle">
                      <div class="d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-circle-minus"></i>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="align-middle fw-bold">
                      <span>CBC test</span>
                    </td>
                    <td class="align-middle fw-bold">
                      <span>43</span>
                    </td>
                    <td class="align-middle fw-bold">
                      30:35
                    </td>
                    <td class="align-middle fw-bold">
                      <span>Red test</span>
                    </td>

                    <td class="align-middle">
                      <div class="d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-circle-up"></i>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="align-middle fw-bold">
                      <span>CBC test</span>
                    </td>
                    <td class="align-middle fw-bold">
                      <span>43</span>
                    </td>
                    <td class="align-middle fw-bold">
                      30:35
                    </td>
                    <td class="align-middle fw-bold">
                      <span>Red test</span>
                    </td>

                    <td class="align-middle">
                      <div class="d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-circle-down"></i>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <hr class="modify-hr">
				<div class="d-flex justify-content-between">
					<div class="d-flex align-items-center gap-2">
	          <span class="form-label">Comment: </span>
	          <span class="form-label primary-color">the biggest and best library 50ML tablet, Septazole 50ML tablet</span>
	        </div>
				</div>
        <hr class="modify-hr">
				<div class="d-flex justify-content-start gap-4">
					<div v-for="img in defaultImages.images" :key="img.id" class="d-flex align-items-center gap-2">
	          <img :src="img.src">
	        </div>
				</div>
			</Base>				
			</div>
			<div class="col-md-6">
				<Base>
					<div class="d-flex justify-content-between">
						<div class="d-flex align-items-center gap-2">
		          <Avatar image="/assets/images/users/1.jpg" size="medium" shape="circle" class="custom-size" />
		          <h6 class="mb-0">Doctor name</h6>
		          <i class="fa-solid fa-circle-check"></i>
		        </div>
						<div></div>
						<div class="d-flex align-items-center gap-2">
		          <span class="form-label">Date: </span>
		          <span class="form-label primary-color">20 May 2024</span>
		        </div>
		        <div class="d-flex align-items-center p-2">
		        	<i class="fa-solid fa-ellipsis-vertical fs-4"></i>
		        </div>
					</div>
					<hr class="modify-hr">
					<div class="d-flex justify-content-between">
						<div class="d-flex align-items-center gap-2">
		          <span class="form-label">Diagnosis: </span>
		          <span class="form-label primary-color">Our Partnership with OpenAI</span>
		        </div>
						<div class="d-flex align-items-center gap-2 px-5">
		          <Avatar image="/assets/images/users/1.jpg" size="medium" shape="circle" class="custom-size" />
		          <h6 class="mb-0">Lab name</h6>
		        </div>
					</div>
					<hr class="modify-hr">
					<div class="d-flex justify-content-between">
						<div class="d-flex align-items-center gap-2">
		          <span class="form-label">Test name: </span>
		          <span class="form-label primary-color">CBC</span>
		        </div>
					</div>
        <div class="row">
          <div class="col-12">
            <div class="table-responsive">
              <table class="table table-sm text-center">
                <thead>
                  <tr>
                    <th scope="col">Component</th>
                    <th scope="col">Value</th>
                    <th scope="col">Reference</th>
                    <th scope="col">Unit</th>
                    <th scope="col">Flag</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="align-middle fw-bold">
                      <span>CBC test</span>
                    </td>
                    <td class="align-middle fw-bold">
                      <span>43</span>
                    </td>
                    <td class="align-middle fw-bold">
                      30:35
                    </td>
                    <td class="align-middle fw-bold">
                      <span>Red test</span>
                    </td>

                    <td class="align-middle">
                      <div class="d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-circle-up"></i>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="align-middle fw-bold">
                      <span>CBC test</span>
                    </td>
                    <td class="align-middle fw-bold">
                      <span>43</span>
                    </td>
                    <td class="align-middle fw-bold">
                      30:35
                    </td>
                    <td class="align-middle fw-bold">
                      <span>Red test</span>
                    </td>

                    <td class="align-middle">
                      <div class="d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-circle-down"></i>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="align-middle fw-bold">
                      <span>CBC test</span>
                    </td>
                    <td class="align-middle fw-bold">
                      <span>43</span>
                    </td>
                    <td class="align-middle fw-bold">
                      30:35
                    </td>
                    <td class="align-middle fw-bold">
                      <span>Red test</span>
                    </td>

                    <td class="align-middle">
                      <div class="d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-circle-minus"></i>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="align-middle fw-bold">
                      <span>CBC test</span>
                    </td>
                    <td class="align-middle fw-bold">
                      <span>43</span>
                    </td>
                    <td class="align-middle fw-bold">
                      30:35
                    </td>
                    <td class="align-middle fw-bold">
                      <span>Red test</span>
                    </td>

                    <td class="align-middle">
                      <div class="d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-circle-up"></i>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="align-middle fw-bold">
                      <span>CBC test</span>
                    </td>
                    <td class="align-middle fw-bold">
                      <span>43</span>
                    </td>
                    <td class="align-middle fw-bold">
                      30:35
                    </td>
                    <td class="align-middle fw-bold">
                      <span>Red test</span>
                    </td>

                    <td class="align-middle">
                      <div class="d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-circle-down"></i>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <hr class="modify-hr">
				<div class="d-flex justify-content-between">
					<div class="d-flex align-items-center gap-2">
	          <span class="form-label">Comment: </span>
	          <span class="form-label primary-color">the biggest and best library 50ML tablet, Septazole 50ML tablet</span>
	        </div>
				</div>
        <hr class="modify-hr">
				<div class="d-flex justify-content-start gap-4">
					<div v-for="img in defaultImages.images" :key="img.id" class="d-flex align-items-center gap-2">
	          <img :src="img.src">
	        </div>
				</div>
			</Base>				
			</div>
			<div class="col-md-6">
				<Base>
					<div class="d-flex justify-content-between">
						<div class="d-flex align-items-center gap-2">
		          <Avatar image="/assets/images/users/1.jpg" size="medium" shape="circle" class="custom-size" />
		          <h6 class="mb-0">Doctor name</h6>
		          <i class="fa-solid fa-circle-check"></i>
		        </div>
						<div></div>
						<div class="d-flex align-items-center gap-2">
		          <span class="form-label">Date: </span>
		          <span class="form-label primary-color">20 May 2024</span>
		        </div>
		        <div class="d-flex align-items-center p-2">
		        	<i class="fa-solid fa-ellipsis-vertical fs-4"></i>
		        </div>
					</div>
					<hr class="modify-hr">
					<div class="d-flex justify-content-between">
						<div class="d-flex align-items-center gap-2">
		          <span class="form-label">Diagnosis: </span>
		          <span class="form-label primary-color">Our Partnership with OpenAI</span>
		        </div>
						<div class="d-flex align-items-center gap-2 px-5">
		          <Avatar image="/assets/images/users/1.jpg" size="medium" shape="circle" class="custom-size" />
		          <h6 class="mb-0">Lab name</h6>
		        </div>
					</div>
					<hr class="modify-hr">
					<div class="d-flex justify-content-between">
						<div class="d-flex align-items-center gap-2">
		          <span class="form-label">Test name: </span>
		          <span class="form-label primary-color">CBC</span>
		        </div>
					</div>
        <div class="row">
          <div class="col-12">
            <div class="table-responsive">
              <table class="table table-sm text-center">
                <thead>
                  <tr>
                    <th scope="col">Component</th>
                    <th scope="col">Value</th>
                    <th scope="col">Reference</th>
                    <th scope="col">Unit</th>
                    <th scope="col">Flag</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="align-middle fw-bold">
                      <span>CBC test</span>
                    </td>
                    <td class="align-middle fw-bold">
                      <span>43</span>
                    </td>
                    <td class="align-middle fw-bold">
                      30:35
                    </td>
                    <td class="align-middle fw-bold">
                      <span>Red test</span>
                    </td>

                    <td class="align-middle">
                      <div class="d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-circle-up"></i>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="align-middle fw-bold">
                      <span>CBC test</span>
                    </td>
                    <td class="align-middle fw-bold">
                      <span>43</span>
                    </td>
                    <td class="align-middle fw-bold">
                      30:35
                    </td>
                    <td class="align-middle fw-bold">
                      <span>Red test</span>
                    </td>

                    <td class="align-middle">
                      <div class="d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-circle-down"></i>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="align-middle fw-bold">
                      <span>CBC test</span>
                    </td>
                    <td class="align-middle fw-bold">
                      <span>43</span>
                    </td>
                    <td class="align-middle fw-bold">
                      30:35
                    </td>
                    <td class="align-middle fw-bold">
                      <span>Red test</span>
                    </td>

                    <td class="align-middle">
                      <div class="d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-circle-minus"></i>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="align-middle fw-bold">
                      <span>CBC test</span>
                    </td>
                    <td class="align-middle fw-bold">
                      <span>43</span>
                    </td>
                    <td class="align-middle fw-bold">
                      30:35
                    </td>
                    <td class="align-middle fw-bold">
                      <span>Red test</span>
                    </td>

                    <td class="align-middle">
                      <div class="d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-circle-up"></i>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="align-middle fw-bold">
                      <span>CBC test</span>
                    </td>
                    <td class="align-middle fw-bold">
                      <span>43</span>
                    </td>
                    <td class="align-middle fw-bold">
                      30:35
                    </td>
                    <td class="align-middle fw-bold">
                      <span>Red test</span>
                    </td>

                    <td class="align-middle">
                      <div class="d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-circle-down"></i>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <hr class="modify-hr">
				<div class="d-flex justify-content-between">
					<div class="d-flex align-items-center gap-2">
	          <span class="form-label">Comment: </span>
	          <span class="form-label primary-color">the biggest and best library 50ML tablet, Septazole 50ML tablet</span>
	        </div>
				</div>
        <hr class="modify-hr">
				<div class="d-flex justify-content-start gap-4">
					<div v-for="img in defaultImages.images" :key="img.id" class="d-flex align-items-center gap-2">
	          <img :src="img.src">
	        </div>
				</div>
			</Base>				
			</div>
		</div>
		<EditDialog :display="displayForm" @close="cancelForm" @cancel="cancelForm" @save="saveForm" :min-width="'80%'" :max-width="'80%'" :isLoading="isLoading" :header="header">
      <div class="row">
      	<div class="col-md-3">
      		<div class="form-group">
            <label for="" class="form-label">Date</label>
            <Calendar  :showIcon="true" dateFormat="yy-mm-dd"
              placeholder="date" />
          </div>
      	</div>
      	<div class="col-md-3">
          <div class="form-group">
            <label for="" class="form-label">Doctor name</label>
              <span :class="[locale == 'ar' ? 'p-input-icon-left' : 'p-input-icon-right',]">
                <i class="pi pi-search"></i>
                <AutoComplete
                  placeholder="doctor name"
                />
            </span>
          </div>
      	</div>
      	<div class="col-md-3">
      		<div class="form-group">
            <label for="" class="form-label">Diagnosis</label>
              <span :class="[locale == 'ar' ? 'p-input-icon-left' : 'p-input-icon-right',]">
                <i class="pi pi-search"></i>
                <AutoComplete
                  placeholder="diagnosis"
                />
            </span>
          </div>
      	</div>
      	<div class="col-md-3">
      		<div class="form-group">
            <label for="" class="form-label">Lab</label>
              <span :class="[locale == 'ar' ? 'p-input-icon-left' : 'p-input-icon-right',]">
                <i class="pi pi-search"></i>
                <AutoComplete
                  placeholder="lab"
                />
            </span>
          </div>
      	</div>
      </div>
      <hr class="custom-hr">
      <div class="d-flex align-items-center my-2">
        <span class="me-2">Analysis</span>
        <InputSwitch v-model="switcher" class="me-2" />
        <span>Scanning</span>
      </div>
      <div class="row">
      	<div class="col-md-3">
          <div class="form-group">
              <label class="form-label">Test name</label>
              <div class="p-inputgroup">
                <span class="p-inputgroup-addon">
                	<i class="mdi mdi-pill"></i>
                </span>
                <AutoComplete placeholder="Test name" />
              </div>
          </div>
      	</div>
      </div>
      <hr class="custom-hr">
      <div class="row" v-if="switcher == true">
      	<div class="col-md-3">
      		<label for="" class="form-label">Sub test</label>
      		<div class="p-inputgroup">
            <span class="p-inputgroup-addon">
            	<i class="mdi mdi-pill"></i>
            </span>
	        	<AutoComplete placeholder="sub-test name" />
	      	</div>
      	</div>
      	<div class="col-md-3">
      		<label for="" class="form-label">Result</label>
      		<div class="p-inputgroup">
            <span class="p-inputgroup-addon">
            	<i class="mdi mdi-pill"></i>
            </span>
	        	<AutoComplete placeholder="result" />
	      	</div>
      	</div>
      	<div class="col-md-3">
      		<label for="" class="form-label">Reference</label>
      		<div class="p-inputgroup">
            <span class="p-inputgroup-addon">
            	<i class="mdi mdi-pill"></i>
            </span>
	        	<Dropdown :options="options" optionLabel="name" placeholder="reference" />
	      	</div>
      	</div>
      	<div class="col-md-3">
      		<label for="" class="form-label">Unit</label>
      		<div class="p-inputgroup">
            <span class="p-inputgroup-addon">
            	<i class="mdi mdi-pill"></i>
            </span>
	        	<AutoComplete placeholder="unit" />
	      	</div>
      	</div>
      	<div class="col-md-3 my-2">
      		<AddButton @add="displayDialog"></AddButton>
      	</div>
      </div>
      <div class="row mb-2" v-else>
      	<div class="col-md-3">
      		<label for="" class="form-label">Comment</label>
      		<div class="p-inputgroup">
            <span class="p-inputgroup-addon">
            	<i class="mdi mdi-pill"></i>
            </span>
	        	<AutoComplete placeholder="comment" />
	      	</div>
      	</div>
      	<div class="col-md-3">
      		<label class="form-label hide">x</label>
      		<AddButton @add="displayDialog"></AddButton>
      	</div>
      </div>
    </EditDialog>
	</div>
</template>
<i18n src="@/lang/mr/global/rx/rx.json"></i18n>
<script>
import Base from "@/components/global/utilities/Base.vue";
import AddButton from "@/components/global/utilities/AddButtonWithText.vue";
import EditDialog from "@/components/global/utilities/EditDialog.vue";

export default {
  components:{
    Base,
    AddButton,
    EditDialog,
  },
  data(){
    return{
    	displayForm: false,
    	isLoading: false,
    	header: "Medical Test",
    	switcher: true,
      options: [
          {name: '20 May 2024',id:1}
      ],
      defaultImages: {
        images: [
          { id: 1, src: require("@/assets/search/slider_1.svg"), alt: "Image from 1" },
          { id: 2, src: require("@/assets/search/slider_2.svg"), alt: "Image 2" },
          { id: 3, src: require("@/assets/search/slider_3.svg"), alt: "Image 3" },
        ],
      },
    }
  },
  methods: {
    saveForm() {
    },
    cancelForm() {
      this.$emit("cancel");
      this.displayForm = false
    },
    displayDialog() {
    	this.displayForm = true
    }
  },
}
</script>
<style lang="scss" scoped>
  .primary-color {
    color: $primary;
  }
  .modify-hr {
  	border-top: 1px solid $success;
  	margin-top: 2px !important;
  	margin-bottom: 2px !important;
  }
  .custom-hr {
  	border-top: 1px solid $success;
  	margin: 10px 0px 10px 0px !important;
  }
  ol li {
  	font-weight: 500;
  }
  .hide {
  	visibility: hidden;
  }
  .fa-circle-down, .fa-circle-up {
  	color: #FE0000;
  }
  .fa-circle-minus {
  	color: $primary;
  }
</style>