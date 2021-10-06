import React from 'react';
import './Remote.css';

function Remote({
  handleswitch,
  handlesleep,
  handlebright,
  handledecrease,
  handlevolume,
  handlevolumedecrease,
  haddleup,
  handledown
}) {
  return (
    <div>
      <div class='calculator-keys'>
      <button
          type='button'
          class='decimal function btn btn-success'
          style={{
            backgroundColor: '#2e64fe',
            border: '0px',
            borderRadius: '25px',
            height: '60px',
            fontSize: '10px'
          }}
          onClick={() => handlesleep()}
        >
          Sleep
        </button>
        <button
          type='button'
          class='btn waves-effect'
          onClick={() => handlesleep()}
        ></button>
        <button
          type='button'
          onClick={() => handleswitch()}
          style={{
            backgroundColor: '#fa4000',
            border: '0px',
            borderRadius: '25px',
            height: '60px',
            justifyContent: 'center',
            alignContent: 'center'
          }}
          class='operator btn btn-danger'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            class='bi bi-power'
            viewBox='0 0 16 16'
          >
            <path d='M7.5 1v7h1V1h-1z' />
            <path d='M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z' />
          </svg>
        </button>

        <button type='button' class='btn'></button>
        <button
          type='button'
          class='btn btn-secondary waves-effect'
          style={{
            backgroundColor: '#034961',
            border: '0px',
            borderRadius: '25px',
            height: '60px'
          }}
          onClick={() => haddleup()}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            class='bi bi-arrow-up-square-fill'
            viewBox='0 0 16 16'
          >
            <path d='M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z' />
          </svg>
        </button>
        <button type='button' class='btn'></button>

        <button
          type='button'
          class='btn btn-secondary waves-effect'
          style={{
            backgroundColor: '#51b238',
            border: '0px',
            borderRadius: '25px',
            height: '60px'
          }}
          onClick={() => handlevolumedecrease()}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            class='bi bi-volume-down-fill'
            viewBox='0 0 16 16'
          >
            <path d='M9 4a.5.5 0 0 0-.812-.39L5.825 5.5H3.5A.5.5 0 0 0 3 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 9 12V4zm3.025 4a4.486 4.486 0 0 1-1.318 3.182L10 10.475A3.489 3.489 0 0 0 11.025 8 3.49 3.49 0 0 0 10 5.525l.707-.707A4.486 4.486 0 0 1 12.025 8z' />
          </svg>
        </button>
        <button type='button' class='btn waves-effect'></button>
        <button
          type='button'
          class='btn btn-secondary waves-effect'
          style={{
            backgroundColor: '#016b01',
            border: '0px',
            borderRadius: '25px',
            height: '60px'
          }}
          onClick={() => handlevolume()}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            class='bi bi-volume-up-fill'
            viewBox='0 0 16 16'
          >
            <path d='M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z' />
            <path d='M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z' />
            <path d='M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z' />
          </svg>
        </button>

        <button type='button' class='btn'></button>
        <button
          type='button'
          class='btn btn-secondary waves-effect'
          style={{
            backgroundColor: '#0587b3',
            border: '0px',
            borderRadius: '25px',
            height: '60px'
          }}
          onClick={() => handledown()}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            class='bi bi-arrow-down-circle-fill'
            viewBox='0 0 16 16'
          >
            <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z' />
          </svg>
        </button>
        <button type='button' class='btn waves-effect'></button>

        
       
        
        
       
        <button
          type='button'
          class='operator btn btn-info'
          style={{
            backgroundColor: '#ed85d5',
            border: '0px',
            borderRadius: '25px',
            height: '60px'
          }}
          onClick={() => handledecrease()}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            class='bi bi-brightness-low'
            viewBox='0 0 16 16'
          >
            <path d='M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm.5-9.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm5-5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-11 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9.743-4.036a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm-7.779 7.779a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm7.072 0a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707zM3.757 4.464a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707z' />
          </svg>
        </button>
        <button type='button' value='0' class='btn waves-effect'></button>
        <button
          type='button'
          class='operator btn btn-info'
          style={{
            backgroundColor: '#f739cb',
            border: '0px',
            borderRadius: '25px',
            height: '60px',
            justifyContent: 'center',
            alignContent: 'center'
          }}
          onClick={() => handlebright()}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            class='bi bi-brightness-high-fill'
            viewBox='0 0 16 16'
          >
            <path d='M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z' />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Remote;