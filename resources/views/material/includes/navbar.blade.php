<div class="navbar-fixed">
    <nav>
        <div class="nav-wrapper teal">
            <a class="brand-logo" onclick="M.toast({html: 'Thats my name', classes: 'rounded'})">Hasil Paudyal
            <i class="material-icons right">verified_user</i>
        </a>
            <ul class="right hide-on-med-and-down">
                <li><a class="tooltipped modal-trigger" href="#modalhire" data-position="bottom"
                        data-tooltip="Interested in teaming up with me?">
                        <i class="material-icons left">work</i>Hire Me!
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</div>
<div id="modalhire" class="modal modal-fixed-footer">
    <form class="col s12" id="newContact">
        <div class="modal-content">
            <div class="card-title teal-text">Interested in teaming up with me?</div>
            <div class="row">
                <div class="row">
                    <div class="input-field col s12 m6">
                        <i class="material-icons prefix">person</i>
                        <input id="name" type="text" class="validate" required>
                        <label for="name">Name</label>
                    </div>
                    <div class="input-field col s12 m6">
                        <i class="material-icons prefix">email</i>
                        <input id="email" type="email" class="validate" required>
                        <label for="email">Email</label>
                    </div>
                    <div class="input-field col s12 m6">
                        <i class="material-icons prefix">location_city</i>
                        <input id="city" type="text" class="validate" required>
                        <label for="city">City</label>
                    </div>
                    <div class="input-field col s12 m6">
                        <i class="material-icons prefix">public</i>
                        <input id="country" type="text" class="validate" required>
                        <label for="country">Country</label>
                    </div>
                    <div class="input-field col s12 m6">
                        <i class="material-icons prefix">work</i>
                        <select id="jobFor">
                            <option disabled selected>Job offering for...</option>
                            <option>Software development</option>
                            <option>Electrical field work</option>
                            <option>Sales and support</option>
                            <option>Electronic project</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div class="input-field col s12 m6">
                        <i class="material-icons prefix">update</i>
                        <select id="timeFor">
                            <option disabled selected> Shift of work</option>
                            <option>Day full time</option>
                            <option>Night full time</option>
                            <option>Part time</option>
                            <option>Contract based</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div class="input-field col s12">
                        <i class="material-icons prefix">public</i>
                        <textarea class="materialize-textarea" id="message"></textarea>
                        <label for="message">More info here</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <button type="submit" id="submitContact" class="waves-effect waves-green btn-flat teal-text"><i
                    class="material-icons left">send</i>Submit</button>
            <a class="modal-close waves-effect waves-red btn-flat red-text"><i
                    class="material-icons left">cancel</i>Cancel</a>
        </div>
    </form>
</div>