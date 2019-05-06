// Copyright 2016 Intel Corporation
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

var iotivity = require( "bindings" )( "iotivity" );
var StorageHandler = require( "./StorageHandler" );
var Util = require("./Util");

const stackOKOrThrow = Util.stackOKOrThrow;

stackOKOrThrow( iotivity.OCRegisterPersistentStorageHandler( new StorageHandler() ),
	"OCRegisterPersistentStorageHandler() failed" );
stackOKOrThrow( iotivity.OCInit( null, 0, iotivity.OCMode.OC_CLIENT_SERVER ), "OCInit() failed" );
stackOKOrThrow( iotivity.OCStartPresence( 0 ), "OCStartPresence() failed" );

module.exports = iotivity;
