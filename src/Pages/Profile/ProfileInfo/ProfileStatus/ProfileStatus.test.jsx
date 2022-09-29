import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("status from props should be in the state", () => {
    const component = create(<ProfileStatus status="SUBSCRIBE TO BASIC" />);
    const instance = component.getInstance();	//instance - экземпляр объекта, с которым происходит взаимодействие
    expect(instance.state.status).toBe("SUBSCRIBE TO BASIC");
  });

  test("аfter creation <div> should be displayed", async () => {
    const component = create(<ProfileStatus status="SUBSCRIBE TO BASIC" />);
    const instance = component.root;
	let div = await instance.findAllByType("div");
    expect(div.length).toBe(2);
  });
  test("аfter creation <input> shouldn't be displayed", async () => {
    const component = create(<ProfileStatus status="SUBSCRIBE TO BASIC" />);
    const instance = component.root;
	let input = await instance.findAllByType("input");
    expect(input.length).toBe(0);
  });
  test("аfter creation <div> should contains correct status", async () =>  {
    const component = create(<ProfileStatus status="SUBSCRIBE TO BASIC" />);
    const instance = component.root;
	let div = await instance.findAllByType("div")
    expect(div[1].children[0]).toBe("SUBSCRIBE TO BASIC");
  });

 /*  test("input should be dislplayed in editMode instead of span", async () =>  {		//??????//
    const component = create(<ProfileStatus status="SUBSCRIBE TO BASIC"/>);
    const instance = component.root;
	let div = await instance.findAllByType("div");
	div[1].props.onClick();
	let input = await instance.findAllByType("input");
    expect(input[0].children[0]).toBe("SUBSCRIBE TO BASIC");
  }); */

  test("callback should be called", async () =>  {	
	const mockCallback = jest.fn();
    const component = create(<ProfileStatus status="SUBSCRIBE TO BASIC" updateStatus={mockCallback}/>);
    const instance = component.getInstance();
	instance.changeEditMode();
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});