const fs = require('fs');

var faces = `<ul class="flex flex-row justify-between items-center overflow-y-scroll scroll-auto"><li class="pr-2 cursor-pointer border-gray-400"><svg class="md:w-10 md:h-10 sm:w-8 sm:h-8 w-6 h-6" viewBox="0 0 36 36"><path d="M32 23s7 0 1-8c0 0 6-2-2-7 0 0 6-6.017-7-3 0 0 0-5-2-5s-4 4-4 4-2-4-4-4-2 5-2 5C-1 1.928 5 8 5 8c-8 5-2 7-2 7-6 8 1 8 1 8s-4 2-4 5 3 2 6 2c-7 9 12 1 12 1s19 8 12-1c3 0 6 1 6-2s-4-5-4-5z" fill="#292F33"></path><path d="M28.963 16s-.26-6.519-3.982-9C21.982 5 20 5 18 5c-2.089 0-4 0-7 2-3.721 2.481-4 9-4 9-1 0-2.271 2.291-2 5 .289 2.889 2 4 2 4 0 4 3 7 3 7 0 2 0 3 4 3h7.963c4.037 0 4-1 4-3 0 0 3-3 3-7 0 0 1.711-1.111 2-4 .271-2.709-1-5-2-5z" fill="#DD2E44"></path><path d="M6.002.95c.026-.497.435-.896.92-.936.632-.053.912.447 1.146.953.73 1.574 1.508 3.121 2.544 4.52.72.973 1.589 2.014 2.696 2.564.589.197.862.911.55 1.449.525.911-.513 1.79-1.366 1.364-1.16.67-3.078-1.545-3.733-2.334A11.73 11.73 0 016.805 5.1c-.469-1.27-.883-2.779-.803-4.15zm23.988 0a1.008 1.008 0 00-.92-.936c-.632-.053-.912.447-1.146.953-.73 1.574-1.508 3.121-2.544 4.52-.72.973-1.589 2.014-2.696 2.564a1.012 1.012 0 00-.55 1.449c-.525.911.513 1.79 1.366 1.364 1.16.67 3.078-1.545 3.733-2.334a11.711 11.711 0 001.954-3.429c.469-1.271.883-2.78.803-4.151z" fill="#F4900C"></path></svg></li><li class="px-2 border-l cursor-pointer border-gray-400"><svg class="md:w-10 md:h-10 sm:w-8 sm:h-8 w-6 h-6" viewBox="0 0 36 36"><path d="M36 11a2 2 0 00-4 0s-.011 3.285-3 3.894V12c0-6.075-4.925-11-11-11S7 5.925 7 12v3.237C1.778 16.806 0 23.231 0 27a2 2 0 004 0s.002-3.54 3.336-3.958C7.838 27.883 8.954 33 11 33h1c4 0 3 2 7 2s3-2 6-2 2.395 2 6 2a3 3 0 003-3c0-.675-2.274-4.994-3.755-9.268C35.981 21.348 36 14.58 36 11z" fill="#E1E8ED"></path></svg></li><li class="px-2 border-l cursor-pointer border-gray-400"><svg class="md:w-10 md:h-10 sm:w-8 sm:h-8 w-6 h-6" viewBox="0 0 36 36"><path d="M35 17c0 9.389-13.223 19-17 19-3.778 0-17-9.611-17-19S8.611 0 18 0s17 7.611 17 17z" fill="#CCD6DD"></path></svg></li><li class="px-2 border-l cursor-pointer border-gray-400"><svg class="md:w-10 md:h-10 sm:w-8 sm:h-8 w-6 h-6" viewBox="0 0 36 36"><g clip-path="url(#prefix__clip0)" fill="#AA8DD8"><path d="M18 36c9.941 0 18-8.059 18-18S27.941 0 18 0 0 8.059 0 18s8.059 18 18 18z"></path><path d="M10 4C7.42 4 4.369 1.534 3.414.586A1.998 1.998 0 001.235.153 1.998 1.998 0 000 2c0 3.459 1.672 10 8 10a2 2 0 001.789-1.106l2-4A1.999 1.999 0 0010 4zM34.766.153a1.996 1.996 0 00-2.18.434C31.7 1.472 28.589 4 26 4a1.999 1.999 0 00-1.789 2.895l2 4A2 2 0 0028 12c6.328 0 8-6.541 8-10 0-.809-.487-1.538-1.234-1.847z"></path></g><defs><clipPath id="prefix__clip0"><path fill="#fff" d="M0 0h36v36H0z"></path></clipPath></defs></svg></li><li class="px-2 border-l cursor-pointer border-gray-400"><svg class="md:w-10 md:h-10 sm:w-8 sm:h-8 w-6 h-6" viewBox="0 0 36 36"><path d="M34 16C34 6 26.837 0 18 0 9.164 0 2 6 2 16c0 5.574.002 10.388 6 12.64V33a3 3 0 106 0v-3.155c.324.027.659.05 1 .07V33a3 3 0 106 0v-3.085c.342-.021.676-.043 1-.07V33a3 3 0 006 0v-4.36c5.998-2.252 6-7.066 6-12.64z" fill="#CCD6DD"></path></svg></li><li class="px-2 border-l cursor-pointer border-gray-400"><svg class="md:w-10 md:h-10 sm:w-8 sm:h-8 w-6 h-6" viewBox="0 0 36 36"><g clip-path="url(#prefix__clip0)"><path d="M33.541 23.198c.364-1.578.243-3.266-.458-4.946a8.018 8.018 0 00-3.271-3.773c.318-1.192.234-2.475-.324-3.75-.841-1.92-2.66-3.201-4.712-3.562.249-.572.329-1.289.036-2.167-1-3-5-1-8-4.999-2.44 1.464-2.97 3.64-2.878 5.487-2.421.412-3.8.936-3.8.936v.002a3.713 3.713 0 00-2.322 3.442c0 .879.318 1.676.828 2.312l-.692.258.001.003c-2.33.871-3.975 2.976-3.975 5.439 0 1.047.3 2.027.82 2.878C1.971 22.027 0 24.781 0 28c0 4.418 3.691 8 8.244 8 3.269 0 6.559-.703 9.531-1.665C20.018 35.375 23.47 36 28.667 36A7.333 7.333 0 0036 28.667a7.31 7.31 0 00-2.459-5.469z" fill="#BF6952"></path></g><defs><clipPath id="prefix__clip0"><path fill="#fff" d="M0 0h36v36H0z"></path></clipPath></defs></svg></li><li class="px-2 border-l cursor-pointer border-gray-400"><svg class="md:w-10 md:h-10 sm:w-8 sm:h-8 w-6 h-6" viewBox="0 0 36 36"><path d="M18 36c9.941 0 18-8.059 18-18S27.941 0 18 0 0 8.059 0 18s8.059 18 18 18z" fill="#FFCC4D"></path></svg></li><li class="px-2 border-l cursor-pointer border-gray-400"><svg class="md:w-10 md:h-10 sm:w-8 sm:h-8 w-6 h-6" viewBox="0 0 36 36"><path d="M36 18c0 9.941-8.059 18-18 18-9.94 0-18-8.059-18-18C0 8.06 8.06 0 18 0c9.941 0 18 8.06 18 18z" fill="#DA2F47"></path></svg></li><li class="px-2 border-l cursor-pointer border-gray-400"><svg class="md:w-10 md:h-10 sm:w-8 sm:h-8 w-6 h-6" viewBox="0 0 36 36"><path d="M36 18c0 9.941-8.059 18-18 18-9.94 0-18-8.059-18-18C0 8.06 8.06 0 18 0c9.941 0 18 8.06 18 18z" fill="#FFCC4D"></path><path d="M18 11c8.749 0 16.033 4.509 17.656 10.484.222-1.128.344-2.292.344-3.484 0-9.94-8.059-18-18-18C8.06 0 0 8.06 0 18c0 1.192.123 2.356.344 3.484C1.967 15.509 9.252 11 18 11z" fill="#BDDDF4"></path></svg></li><li class="px-2 border-l cursor-pointer border-gray-400"><svg class="md:w-10 md:h-10 sm:w-8 sm:h-8 w-6 h-6" viewBox="0 0 36 36"><g clip-path="url(#prefix__clip0)"><path d="M35.734 19.929C35.375 16.66 35 15 34 13c0 0 3-9 1-12.7-.674-1.246-7.404 1.688-10 3.7 0 0-4-.998-7-.998S11 4 11 4C8.404 1.988 1.674-.946 1 .3-1 4 2 13 2 13 1 15 .625 16.66.266 19.929-.129 23.513.657 26.37 1 27c.39.716 2.367 3.025 5 5 4 3 10 4 12 4s8-1 12-4c2.633-1.975 4.61-4.284 5-5 .343-.63 1.129-3.487.734-7.071z" fill="#FFCC4D"></path></g><defs><clipPath id="prefix__clip0"><path fill="#fff" d="M0 0h36v36H0z"></path></clipPath></defs></svg></li><li class="px-2 border-l cursor-pointer border-gray-400"><svg class="md:w-10 md:h-10 sm:w-8 sm:h-8 w-6 h-6" viewBox="0 0 36 36"><path d="M7.119 22.17c1.968-.502 2.974-3.224 2.246-6.079-.728-2.855-2.913-4.763-4.882-4.261-1.968.502-2.974 3.223-2.246 6.078.728 2.855 2.913 4.763 4.882 4.261zM33.764 17.91c.728-2.856-.278-5.577-2.247-6.079-1.968-.502-4.154 1.406-4.881 4.262-.728 2.855.278 5.576 2.246 6.078 1.968.501 4.154-1.406 4.882-4.262z" fill="#D79E84"></path><path d="M18.985 35h-1.97c-6.5 0-12.803-4.982-12.803-11.956 0-3.985 1.477-5.978 1.477-5.978s-.492-1.993-.492-3.985C5.197 7.103 11.5 2.121 18 2.121c6.5 0 12.803 5.978 12.803 10.96 0 1.993-.492 3.985-.492 3.985s1.477 1.993 1.477 5.978C31.788 30.018 25.485 35 18.985 35z" fill="#BF6952"></path><path d="M22.242.17s-5.303-1.061-7.424 2.121c-2.121 3.182 4.242 1.061 4.242 1.061S20.121.17 22.242.17z" fill="#BF6952"></path><path d="M29.667 15.379a6.895 6.895 0 00-6.894-6.894A6.87 6.87 0 0018 10.411a6.865 6.865 0 00-4.773-1.926 6.895 6.895 0 00-6.894 6.894 6.881 6.881 0 002.882 5.599 10.532 10.532 0 00-.761 3.946c0 5.565 4.274 9.015 9.545 9.015s9.545-3.45 9.545-9.015c0-1.401-.272-2.734-.761-3.946a6.878 6.878 0 002.884-5.599z" fill="#D79E84"></path></svg></li><li class="px-2 border-l cursor-pointer border-gray-400"><svg class="md:w-10 md:h-10 sm:w-8 sm:h-8 w-6 h-6" viewBox="0 0 36 36"><path d="M29 5a2 2 0 100-4 2 2 0 000 4zM33 11a3 3 0 100-6 3 3 0 000 6z" fill="#4289C1"></path><path d="M33 7a3 3 0 100-6 3 3 0 000 6zM7 5a2 2 0 100-4 2 2 0 000 4zM3 11a3 3 0 100-6 3 3 0 000 6z" fill="#4289C1"></path><path d="M3 7a3 3 0 100-6 3 3 0 000 6z" fill="#4289C1"></path><path d="M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0s18 8.059 18 18z" fill="#FEE7B8"></path><path d="M30.5 7a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" fill="#4289C1"></path><path d="M32 9a2 2 0 100-4 2 2 0 000 4zM5.5 7a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" fill="#4289C1"></path><path d="M4 9a2 2 0 100-4 2 2 0 000 4z" fill="#4289C1"></path></svg></li><li class="px-2 border-l cursor-pointer border-gray-400"><svg class="md:w-10 md:h-10 sm:w-8 sm:h-8 w-6 h-6" viewBox="0 0 36 36"><path d="M33 21c0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15C3 12.716 9.716 6 18 6c8.284 0 15 6.716 15 15z" fill="#FFCC4D"></path><path d="M32 6.13c-1.19 1.441-3.182 1.951-5.076 2.121C26.606 6.713 25.241 1 22.5 1c-2.403 0-3.269 1.091-4.5 1.091C16.769 2.091 15.903 1 13.5 1c-2.741 0-4.106 5.713-4.424 7.251C7.182 8.081 5.19 7.57 4 6.13 1.847 3.524-1 5.444.442 8.304 2.72 12.821 8.23 16 18 16c9.769 0 15.279-3.179 17.558-7.696C37 5.444 34.153 3.524 32 6.13z" fill="#664500"></path><path d="M21.5 3c-1.869 0-2.543.964-3.5.964-.957 0-1.631-.964-3.5-.964C12.037 3 11 9.75 11 9.75S12.282 12 18 12c5.719 0 7-2.25 7-2.25S23.963 3 21.5 3z" fill="#825D0E"></path><path d="M11 6s2.074 2 7 2c4.927 0 7-2 7-2v2s-2.222 2-7 2c-4.778 0-7-2-7-2V6z" fill="#664500"></path></svg></li><li class="px-2 border-l cursor-pointer border-gray-400"><svg class="md:w-10 md:h-10 sm:w-8 sm:h-8 w-6 h-6" viewBox="0 0 36 36"><path d="M33.5 18c1.38 0 2.5-1.567 2.5-3.5S34.88 11 33.5 11 31 12.567 31 14.5s1.12 3.5 2.5 3.5zM2.5 18C3.88 18 5 16.433 5 14.5S3.88 11 2.5 11 0 12.567 0 14.5 1.12 18 2.5 18z" fill="#F4900C"></path><path d="M34 19a1 1 0 01-1 1h-3a1 1 0 01-1-1v-9a1 1 0 011-1h3a1 1 0 011 1v9zM7 19a1 1 0 01-1 1H3a1 1 0 01-1-1v-9a1 1 0 011-1h3a1 1 0 011 1v9z" fill="#FFAC33"></path><path d="M28 5c0 2.761-4.478 4-10 4C12.477 9 8 7.761 8 5s4.477-5 10-5c5.522 0 10 2.239 10 5z" fill="#FFCC4D"></path><path d="M25 4.083C25 5.694 21.865 7 18 7c-3.866 0-7-1.306-7-2.917 0-1.611 3.134-2.917 7-2.917 3.865 0 7 1.306 7 2.917z" fill="#F4900C"></path><path d="M30 5.5C30 6.881 28.881 7 27.5 7h-19C7.119 7 6 6.881 6 5.5A2.5 2.5 0 018.5 3h19A2.5 2.5 0 0130 5.5z" fill="#269"></path><path d="M30 6H6a2 2 0 00-2 2v26h28V8a2 2 0 00-2-2z" fill="#55ACEE"></path><path d="M35 33v-1a2 2 0 00-2-2H22.071l-3.364 3.364a.999.999 0 01-1.414 0L13.929 30H3a2 2 0 00-2 2v1c0 1.104-.104 2 1 2h32c1.104 0 1-.896 1-2z" fill="#3B88C3"></path></svg></li><li class="px-2 border-l cursor-pointer border-gray-400"><svg class="md:w-10 md:h-10 sm:w-8 sm:h-8 w-6 h-6" viewBox="0 0 36 36"><g clip-path="url(#prefix__clip0)"><path d="M35.99 18c0 9.941-8.059 18-18 18-9.94 0-18-8.059-18-18 0-9.94 8.06-18 18-18s18 8.06 18 18z" fill="#77B255"></path></g><defs><clipPath id="prefix__clip0"><path fill="#fff" d="M0 0h36v36H0z"></path></clipPath></defs></svg></li><li class="px-2 border-l cursor-pointer border-gray-400"><svg class="md:w-10 md:h-10 sm:w-8 sm:h-8 w-6 h-6" viewBox="0 0 36 36"><g clip-path="url(#prefix__clip0)"><path d="M18 36c9.941 0 18-8.059 18-18S27.941 0 18 0 0 8.059 0 18s8.059 18 18 18z" fill="#50A5E6"></path></g><defs><clipPath id="prefix__clip0"><path fill="#fff" d="M0 0h36v36H0z"></path></clipPath></defs></svg></li><li class="px-2 border-l cursor-pointer border-gray-400"><svg class="md:w-10 md:h-10 sm:w-8 sm:h-8 w-6 h-6" viewBox="0 0 36 36"><path d="M18 36c9.941 0 18-8.059 18-18S27.941 0 18 0 0 8.059 0 18s8.059 18 18 18z" fill="#EA596E"></path></svg></li><li class="px-2 border-l cursor-pointer border-gray-400"><svg class="md:w-10 md:h-10 sm:w-8 sm:h-8 w-6 h-6" viewBox="0 0 36 36"><path d="M35 18.619a6.869 6.869 0 00-6.869-6.869c-.979 0-2.752.578-2.752.578l-13.126 1.384s-2.717-1.581-4.383-1.581a6.869 6.869 0 00-6.835 7.571C1.406 28.763 8.849 36 18 36c9.389 0 17-7.611 17-17 0-.052-.009-.101-.012-.153.003-.076.012-.151.012-.228z" fill="#FFCB4C"></path><path d="M6.266 13.688c.25-.188 1.113-.512 1.716.051 1.018.949 1.265-1.445 4.477.303 1.469.799 8.989.96 9.699.607 2.692-1.337 4.768-2.198 5.572-1.743.624.353-.973.955.195 1.092 1.193.14 1.261-.49 2.202-.246 1.655.429-1.094 2.324-1.094 2.324-4.357 3.575-19.429.903-22.089-.776-1.099-.694-1.064-1.323-.678-1.612z" fill="#F19020"></path><path d="M29.688 9.115L18 7.812 5.938 9.115c3.656 3.667 4.844 7.917 4.844 7.917l4.437.892 9.501.014c-.001 0 1.53-5.782 4.968-8.823z" fill="#D93047"></path><path d="M29.306 9.435c1.281-1.263-4.775-1.821-9.587-1.821-4.812 0-8.359 1.052-8.359 1.052s-5.092.784-4.395 1.557c.988 1.094 2.2 3.153 2.2 3.153s4.757 2.405 8.351-.626c2.5 1.5 6 .969 7.562-1.609 0 0 1.217.453 2.451.531 0 0 .953-1.425 1.777-2.237z" fill="#C02334"></path><path d="M29.609 15.646c-1.749 1.262-2.091-.253-3.685-.253-1.115 0-1.231.606-2.789 1.328-.957.444-2.326-.764-3.176-.764-1.15 0-2.217 1.553-3.719.73-.84-.46-1.487-1.259-2.623-1.229-1.955.052-1.914.954-3.652.664-4.48-.749-4.355-2.374-4.355-2.374l-.658 4.233h9.382l3.792 1.798 4.458-1.798h5.493s.641-.178 1.094-.342c1.584-.571 1.773-2.956.438-1.993z" fill="#FFCB4C"></path><path d="M31.125 3.725c-.24 0-.467.045-.686.109a3.728 3.728 0 00-2.898-1.396c-.087 0-.169.02-.255.026a3.983 3.983 0 00-2.987-1.359c-1.505 0-2.8.839-3.486 2.066a2.236 2.236 0 00-3.825-.492 3.738 3.738 0 00-3.53-2.532c-1.323 0-2.48.689-3.148 1.723-.184-.029-.368-.058-.56-.058-1.432 0-2.661.812-3.293 1.992a3.377 3.377 0 00-.624-.063 3.375 3.375 0 100 6.75 3.31 3.31 0 001.614-.425c.376.282.838.456 1.345.456.145 0 .285-.016.422-.043a4.825 4.825 0 004.109 2.303 4.852 4.852 0 004.073-2.217 3.901 3.901 0 003.029 1.457 3.914 3.914 0 003.776-2.911c.034.001.065.01.099.01.283 0 .559-.031.826-.087a3.718 3.718 0 002.417.904c1.174 0 2.21-.551 2.897-1.396.219.064.446.109.686.109a2.463 2.463 0 10-.001-4.926z" fill="#E8596E"></path><path d="M27.795 7.888a2.121 2.121 0 100-4.242 2.121 2.121 0 000 4.242zM19.876 5.903a2.16 2.16 0 00-2.16-2.161c-.368 0-.71.101-1.013.263a1.665 1.665 0 00-2.905-.306 3.73 3.73 0 00-2.548-1.013 3.741 3.741 0 00-3.625 2.838 2.012 2.012 0 10-1.429 3.429c.703 0 1.319-.361 1.679-.907a3.74 3.74 0 002.749 2.079 2.24 2.24 0 004.131-.635c.324.18.691.292 1.087.292 1.07 0 1.962-.749 2.19-1.75a2.155 2.155 0 001.844-2.129z" fill="#F3AAB9"></path></svg></li><li class="px-2 border-l cursor-pointer border-gray-400"><svg class="md:w-10 md:h-10 sm:w-8 sm:h-8 w-6 h-6" viewBox="0 0 36 36"><path d="M35 17c0 9.389-7.611 17-17 17-9.388 0-17-7.611-17-17C1 7.612 8.612 0 18 0c9.389 0 17 7.612 17 17z" fill="#FFCB4C"></path><path d="M25.712 32.287v-7.101c0-2.593-3.889-5.185-7.778-5.185s-7.778 2.593-7.778 5.185v7.101c-4.403.349-7.359.985-7.359 1.713 0 1.105 6.777 2 15.137 2s15.137-.895 15.137-2c0-.728-2.956-1.364-7.359-1.713z" fill="#77AF57"></path><path d="M15.875 24.463a1.235 1.235 0 100-2.47 1.235 1.235 0 000 2.47zM20.698 26.875a1.235 1.235 0 100-2.47 1.235 1.235 0 000 2.47zM22.452 30.712a1.235 1.235 0 10-2.438-.396 1.235 1.235 0 002.438.396zM16.85 32.83a1.765 1.765 0 10-3.485-.565 1.765 1.765 0 003.484.566z" fill="#5D8F3F"></path></svg></li><li class="px-2 border-l cursor-pointer border-gray-400"><svg class="md:w-10 md:h-10 sm:w-8 sm:h-8 w-6 h-6" viewBox="0 0 36 36"><path d="M18 36c9.941 0 18-8.059 18-18S27.941 0 18 0 0 8.059 0 18s8.059 18 18 18z" fill="#FFCC4D"></path><path d="M33.175 8.316s-9.042.161-15.175.161c-3.905 0-15.206-.118-15.206-.118l-.521.876c3.043 1.856 9.064 2.917 15.727 2.917 6.596 0 12.576-1.04 15.652-2.86l.078-.047s-.374-.664-.555-.929z" fill="#FFAC33"></path><path d="M23.777.345a70.63 70.63 0 00-3.773-.19A82.683 82.683 0 0018 .129c-.672 0-1.336.01-1.993.025a70.732 70.732 0 00-3.777.19C5.34.88.169 2.451.169 5.287c0 3.588 8.264 5.771 17.831 5.771s17.831-2.183 17.831-5.771c0-2.835-5.168-4.405-12.054-4.942zM18 7.383c-6.861 0-12.91-.833-12.91-2.736 0-.536.494-1.023 1.339-1.449 1.153-.581 2.978-1.044 5.189-1.349 1.911-.262 4.098-.41 6.382-.41 2.291 0 4.485.148 6.4.413 2.242.31 4.086.783 5.232 1.377.807.418 1.278.894 1.278 1.418 0 1.903-6.049 2.736-12.91 2.736z" fill="#5DADEC"></path><path d="M24.4 1.853c2.242.31 4.086.783 5.232 1.377l.062.017c-2.285-1.674-4.57-2.56-5.917-2.902a70.63 70.63 0 00-3.773-.19l.018.007L24.4 1.853zM6.429 3.199c1.153-.581 2.978-1.044 5.189-1.349L15.984.162l.023-.008a70.732 70.732 0 00-3.777.19c-1.347.342-3.633 1.227-5.919 2.902l.118-.047z" fill="#3B94D9"></path><path d="M28.472 3.375c-.66-.443-1.346-.91-2.001-1.26A17.907 17.907 0 0018 0c-2.929 0-5.695.7-8.14 1.941-1.089.553-1.881.999-2.17 1.434h20.782z" fill="#FFCC4D"></path></svg></li><li class="px-2 border-l cursor-pointer border-gray-400"><svg class="md:w-10 md:h-10 sm:w-8 sm:h-8 w-6 h-6" viewBox="0 0 36 36"><path d="M36 18.5c0-1.639-.97-3.004-2.273-3.385C32.367 7.658 25.85 2 18 2 10.15 2 3.633 7.658 2.273 15.115.97 15.496 0 16.861 0 18.5c0 1.736 1.087 3.168 2.51 3.442C4.269 28.868 10.527 34 18 34c7.473 0 13.731-5.132 15.49-12.058C34.912 21.668 36 20.236 36 18.5z" fill="#FFDC5D"></path><path d="M17.982 11h-.031a4.362 4.362 0 01-3.135-1.304 3.739 3.739 0 01-1.076-2.847.992.992 0 011.057-.935c.551.033.972.508.939 1.06-.029.495.155.983.503 1.336a2.425 2.425 0 001.725.729c.653-.036 1.27-.247 1.735-.705a3.312 3.312 0 00.032-4.677 4.391 4.391 0 00-6.202-.042.999.999 0 11-1.404-1.424 6.394 6.394 0 019.03.062 5.29 5.29 0 01-.052 7.486c-.836.826-1.945 1.261-3.121 1.261z" fill="#EF9645"></path></svg></li><li class="px-2 border-l cursor-pointer border-gray-400"><svg class="md:w-10 md:h-10 sm:w-8 sm:h-8 w-6 h-6" viewBox="0 0 36 36"><path d="M5 21c0 2.209-1.119 4-2.5 4S0 23.209 0 21s1.119-4 2.5-4S5 18.791 5 21z" fill="#FFDC5D"></path><path d="M3 18.562C3 10.037 8.373 3.125 15 3.125s12 6.912 12 15.438C27 27.088 21.627 34 15 34S3 27.088 3 18.562z" fill="#FFDC5D"></path><path d="M20 0c-.249 0-.478.007-.713.012C19.19.01 19.097 0 19 0 9 0 2 4.582 2 9s6.373 4 13 4c4.442 0 7.648 0 9.966-.086L25 13l6 15h2s.343-3.055 1-7c1-6 .533-21-14-21z" fill="#DD2E44"></path><path d="M30 21c0 2.209-1.119 4-2.5 4S25 23.209 25 21s1.119-4 2.5-4 2.5 1.791 2.5 4z" fill="#FFDC5D"></path><path d="M27 25c0-2-2.293-.707-3 0-1 1-3 3-5 2-2.828-1.414-4-1-4-1s-1.171-.414-4 1c-2 1-4-1-5-2-.707-.707-3-2-3 0s1 2 1 2c-1 2 1 3 1 3 0 3 3 3 3 3 0 3 4 2 4 2 1 1 3 1 3 1s2 0 3-1c0 0 4 1 4-2 0 0 3 0 3-3 0 0 2-1 1-3 0 0 1 0 1-2z" fill="#E6E7E8"></path><path d="M3 18c1.105 0 2-1.79 2-4s-.895-4-2-4-2 1.79-2 4 .895 4 2 4zM26 18c1.105 0 2-1.79 2-4s-.895-4-2-4-2 1.79-2 4 .895 4 2 4z" fill="#D1D3D4"></path><path d="M32 33a4 4 0 100-8 4 4 0 000 8zM29 12a2 2 0 01-2 2H2a2 2 0 01-2-2v-1a2 2 0 012-2h25a2 2 0 012 2v1z" fill="#F1F2F2"></path></svg></li><li class="px-2 border-l cursor-pointer border-gray-400"><svg class="md:w-10 md:h-10 sm:w-8 sm:h-8 w-6 h-6" viewBox="0 0 36 36"><path d="M10 25c0-2.209-.896-4-2-4s-2-2-2 3c0 2.209 1 5 3 5 1.104 0 1 0 1-4zm16.003 0c0-2.209.896-4 2-4 1.105 0 2-2 2 3 0 2.209-1 5-3 5-1.105 0-1 0-1-4z" fill="#D1D3D4"></path><path d="M6 18.562c0-8.526 5.373-15.438 12-15.438s12 6.912 12 15.438C30 28 23 34 18 34S6 28 6 18.562z" fill="#FFDC5D"></path><path d="M7 18c1.105 0 2-1.79 2-4s-.895-4-2-4-2 1.79-2 4 .895 4 2 4z" fill="#D1D3D4"></path><path d="M8 21c0 2.209-1.119 4-2.5 4S3 23.209 3 21s1.119-4 2.5-4S8 18.791 8 21z" fill="#FFDC5D"></path><path d="M29 18c1.105 0 2-1.79 2-4s-.895-4-2-4-2 1.79-2 4 .895 4 2 4z" fill="#D1D3D4"></path><path d="M33 21c0 2.209-1.119 4-2.5 4S28 23.209 28 21s1.119-4 2.5-4 2.5 1.791 2.5 4z" fill="#FFDC5D"></path><path d="M30.961 10c.016-.185.039-.368.039-.556C31 4.229 25.175 0 17.989 0 10.803 0 4.978 4.229 4.978 9.444c0 .188.024.371.039.556h25.944z" fill="#DD2E44"></path><path d="M18 15a4 4 0 100-8 4 4 0 000 8z" fill="#F1F2F2"></path><path d="M11.5 15a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" fill="#F1F2F2"></path><path d="M6 15a3 3 0 100-6 3 3 0 000 6zM24.5 15a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" fill="#F1F2F2"></path><path d="M30 15a3 3 0 100-6 3 3 0 000 6z" fill="#F1F2F2"></path><path d="M33 12c0-1.657-30-1.657-30 0a3 3 0 003 3h24a3 3 0 003-3z" fill="#F1F2F2"></path></svg></li></ul>`


var nameIndex = 0;

var flatIconNames = [
  'oni_one',
  'ghost',
  'alien',
  'devil',
  'skull',
  'poop',
  'yellow',
  'red',
  'swim_cap',
  'cat',
  'monkey',
  'clown',
  'cowboy',
  'robot',
  'green',
  'blue',
  'pink',
  'head_exploded',
  'vomit',
  'angel',
  'baby',
  'santa_clause',
  'ms_clause'
]

var tweNames = [
  'real_face_light_skin',
  'real_face_yellow'
]

function breakOutSVG(prefix, nameBase, suffix = null, replaceCircle = false) {

  for (let i = 0; i < faces.length; i++) {
    let face = [];
    if ((faces[i] + faces[i + 1] + faces[i + 2] + faces[i + 3]) === '<svg') {
      face.push(faces[i] + faces[i + 1] + faces[i + 2] + faces[i + 3])
      face.push(' xmlns="http://www.w3.org/2000/svg"')
      let s = i + 4
      while (faces[s] + faces[s + 1] + faces[s + 2] + faces[s + 3] + faces[s + 4] + faces[s + 5] != '</svg>') {
        face.push(faces[s])
        s++
      }
      face.push(faces[s] + faces[s + 1] + faces[s + 2] + faces[s + 3] + faces[s + 4] + faces[s + 5])
      let toString = face.join('')
      if (replaceCircle) {
        toString = toString.replace(`<path d="M18 36c9.941 0 18-8.059 18-18S27.941 0 18 0 0 8.059 0 18s8.059 18 18 18z" class="fill-current text-gray-400"></path>`, '')
      }
      fs.writeFile(`./skins/${prefix}_${nameBase[nameIndex]}${suffix ? '_' + suffix : ''}.svg`, toString, (err, stats) =>{
        if (err) {
          console.log(err)
        } else {
           console.log('Finished')
        }
      })
      nameIndex++
      i = s + 5
    } else {
      continue;
    }
  }
}

function skin (prefix, suffix, skin, color, name) {
  let face = []
  for (let i = 0; i < skin.length; i++) {
    if (skin.substring(i, (i + 20)) == `<path fill="${color}"`) {
      let s = i
      while (skin[s] + skin[s + 1] != '/>') {
        console.log(skin[s])
        face.push(skin[s])
        s++
      }
      face.push('/>')
    }
  }
  face.unshift('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">')
  face.push('</svg>')
  let string = face.join('')
  fs.writeFile(`./skins/${prefix}_${name}${suffix ? '_' + suffix : ''}.svg`, string, (err) => console.log('done'))
}

var twitterFileNames = [
  {
    fileName: '1f468-1f3fc-200d-1f9b2',
    name: 'real_face_medium_skin',
    color: '#F2D1A1'
  },
]

async function skinMany(prefix, suffix) {
  for (let i = 0; i < 50; i++) {
    let thisFileName = twitterFileNames[i].fileName
    let thisName = twitterFileNames[i].name
    let thisColor = twitterFileNames[i].color
    await fs.readFile(`./twemojis/${thisFileName}.svg`, 'utf8', function(err, data) {
        if (err) throw err;
            skin(prefix, suffix, data, thisColor, thisName)
    });
  }
}

var headNamesTwe2 = [
  'yellow',
    'red',
    'green',
    'purple',
  'blue',
  'alien',
  'cat',
  'robot',
  'poop',
  'skull',
  'birthday_cake',
  'ice_cream_cone',
  'egg',
  'onion',
  'grapes',
  'pizza',
  'french_fries',
  'hamburger',
  'bread',
  'potato',
  'eggplant',
  'tomato',
  'peach',
  'lemon',
  'orange',
  'red_apple',
  'green_apple',
  'pumpkin',
  'heart',
  'broken_heart',
  'clown',
  'earth',
  'moon_one',
  'plate',
  'wiskey',
  'matcha',
  'coffee',
  'cookie',
  'mochi',
  'basketball',
  'star_one',
  'star_two',
  'ghost',
  'devil',
  'top_hat',
  'baseball',
  'football',
  'soccer',
  'present',
  'crystal_ball',
  'floppy_disk',
  'computer',
  'phone',
  'stop',
  'eight_ball',
  'tennis',
  'sun',
  'clock',
  'bell',
  'toilet_paper',
  'coronovirus'
]

var names = [
  'glasses',
  'sun_glasses',
  'a_heart',
  'many_hearts',
  'rosey_cheeks',
  'halo',
  'nervous_and_crying',
  'tears_of_joy',
  'sweat',
  'swim_cap',
  'single_tear',
  'shocked_hands',
  'angry_smoke',
  'hand_over_mouth',
  'pinoccio_nose',
  'shhhh',
  'finger_gun',
  'excited_hands',
  'celebrate_blow',
  'cowboy_hat',
  'crying',
  'white_mask',
  'dark_mask',
  'sleepy',
  'monocle',
  'pig_nose',
  'ice',
  'santa_hat',
  'beard'
]

var eyesFileName = [
  'devil_eyes',
  'ghost_eyes',
  'alien_eyes',
  'angry_eyes',
  'woah_eyes',
  'big_eyes',
  'brown_eyes',
  'eyebrows',

]

function getCurrentFilenames() {
  let fileNames = []
  fs.readdirSync('./skins').forEach(file => {
    fileNames.push("'" + file + "'")
  });
  fs.writeFile(`array.js`, '[' + fileNames.join(', ') + ']', (err) => console.log('done'))
}

function rename () {
  let files = getCurrentFilenames().filter((n) => n.includes('head'));
  for (let i = 2; i < 100; i++) {
    let index = i < 10 ? '0' + i : i
    fs.rename(`./parts2/topper_${i < 9 ? '0' + i : i}.svg`, `./skins/hat_${names[i]}_twe2.svg`, () => console.log('done'))
  }
}

function renameMistake () {
  let files = getCurrentFilenames().filter((n) => n.includes('twe_2'));
  let files2 = files.filter((n) => n.includes('hat'));
  console.log(files2)
  for (let i = 1; i < files2.length; i++) {
  fs.rename(`./eyes/${files2[i]}`, `./skins/head_${files2[i]}`, (err) => {if (err) console.log(err)})
  }
}

function renameEyes() {
  for (let i = 40; i < 41; i++) {
    fs.readFile(`./extras/${i}-extras.svg`, 'utf8', function(err, data) {
        if (err) throw err;
        let newData = data.replace('<svg xmlns="http://www.w3.org/2000/svg" class="md:w-10 md:h-10 sm:w-8 sm:h-8 w-6 h-6" viewBox="0 0 36 36"><path d="M18 36c9.941 0 18-8.059 18-18S27.941 0 18 0 0 8.059 0 18s8.059 18 18 18z" class="fill-current text-gray-400"></path>', '<svg xmlns="http://www.w3.org/2000/svg" class="md:w-10 md:h-10 sm:w-8 sm:h-8 w-6 h-6" viewBox="0 0 36 36">')
        fs.writeFile(`./skins/${i}-extras.svg`, newData, (err) => console.log('done'))
    })
  }

}

renameEyes()
